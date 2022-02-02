import axios from 'axios'

interface Plugin {
  packageName: string;
  isInstalled: boolean;
}

function mapToPackageNames (response: any): Plugin[] {
  if (!response?.objects) {
    return []
  }
  return response.objects.map((npmObject: any) => {
    return {
      packageName: npmObject.package.name,
    }
  })
}

export async function fetchPlugins() {
  let base = 'https://registry.npmjs.com/-/v1/search?text=keywords:plophub';
  let plugins: Plugin[] = [];
  const size = 200;
  let page = 0;
  while (true) {
    try {
      const uri = `${base}&size=${size}&from=${size * page}`;
      const resp = (await axios.get(uri)).data as any;
      const body = typeof resp === 'string' ? JSON.parse(resp) : resp;
      plugins = plugins.concat(mapToPackageNames(body));

      if (page === Math.floor(body.total / size) || !body.total) {
        break;
      }
      page += 1;
    } catch (_e) {
      break;
    }
  }

  return plugins;
}

