import { d_file1, d_file2, d_hsp1, d_hsp2, d_icon, d_bb1, d_bb2, d_app } from "../../store";
const fetchAndDecode = async (url, type) => {
    try {
        let response = await fetch(url);
        let content;
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            if (type === "json") {
                content = await response.json();
            } else if (type === "text") {
                content = await response.text();
            }
            return content;
        }
    } finally {
         console.log(`fetch attempt for "${url}" finished.`);
    }
};

const setAppDb = async () => {
    // let page = fetchAndDecode("https://nwp-cgn.de/api/data/?f=app4", "json");
    let hsp = fetchAndDecode("https://nwp-cgn.de/api/app/hsp/", "json")
    let file = fetchAndDecode("https://nwp-cgn.de/api/app/file/", "json")
    let apps = fetchAndDecode("https://nwp-cgn.de/api/data/?f=app4", "json")
	let blacks = fetchAndDecode("https://nwp-cgn.de/api/app/bb/", "json")
    let values = await Promise.all([hsp, file, apps, blacks])
    let h1 = values[0].data1;
    let h2 = values[0].data2;
    let f1 = values[1].data1;
    let f2 = values[1].data2;
    let b1 = values[3].data1;
    let b2 = values[3].data2;
    let ic = values[2].icons;
    let ap = values[2].pages;
    d_hsp1.set(h1);
    d_hsp2.set(h2);
    d_file1.set(f1);
    d_file2.set(f2);
    d_bb1.set(b1);
    d_bb2.set(b2);
    d_icon.set(ic);
    d_app.set(ap);
    let dbD = [
        {
          name: 'Hoerspiele',
          logo: 'https://nwp-cgn.de/img/card1.png',
          url: '/hsp',
          p_name: 'Episoden',
          p_cols: Object.keys(h2[0]),
          p_length: h2.length,
          k_name: 'Serien',
          k_cols: Object.keys(h1[0]),
          k_length: h1.length
        },
        {
          name: 'Medien',
          logo: 'https://nwp-cgn.de/img/card2.png',
          url: '/media',
          p_name: 'Files',
          p_cols: Object.keys(f2[0]),
          p_length: f2.length,
          k_name: 'Kategorien',
          k_cols: Object.keys(f1[0]),
          k_length: f1.length
        },
        {
          name: 'Movies',
          logo: 'https://nwp-cgn.de/img/card3.png',
          url: '/studio',
          p_name: 'Filme',
          p_cols: Object.keys(b2[0]),
          p_length: b2.length,
          k_name: 'Kategorien',
          k_cols: Object.keys(b1[0]),
          k_length: b1.length
        }
      ];

    return dbD;
  
};
export { setAppDb }
// setAppDb().catch((e) => console.log(e));




