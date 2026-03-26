/**
 * SONIC HERITAGE V2 — Core Engine
 * Traditional Records · Pure HTML/CSS/JS · No frameworks
 */

// ---------------------------------------------------------------------------
// 1. DATA LAYER
// ---------------------------------------------------------------------------
window.MOCK_DB = {
  releases: [
    { id:2,  artist:"BIGA",             title:"Bijlhoutweg",                     genres:["WINTI"],              price:22.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/42/a0/b4/42a0b488-40c0-bc16-eaf5-17a9373ebd64/198999580341.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Biga%20Bijlhoutweg",   desc:"Rhythms, Roots, Power, Drums, Spirits, Winti, Aisa.", scarcity:"LAATSTE 3" },
    { id:3,  artist:"EWALD KROLIS",     title:"The Best Of",                     genres:["KASEKO"],             price:20.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/9c/4e/249c4ec9-f3e6-5a47-a4c7-3285b997844e/198595545768.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Ewald%20Krolis%20The%20Best%20Of", desc:"Het beste van Ewald Krolis in één collectie." },
    { id:4,  artist:"FAJA WOWIA",       title:"Sama Toli",                       genres:["DANCEHALL","REGGAE"], price:22.50, img:"https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c2/87/e3/c287e3dc-8d89-9c1d-0da3-4a8f41971d97/198595420867.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Faja%20Wowia%20Sama%20Toli",  desc:"Faja Wowia brengt vuur met Sama Toli." },
    { id:5,  artist:"GHETTO CREW",      title:"Anoa Moo Na Winta",               genres:["DANCEHALL","REGGAE"], price:20.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4c/a0/f7/4ca0f764-183f-b98e-bea0-44375270ebd6/198595516638.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Ghetto%20Crew%20Anoa%20Moo%20Na%20Winta", desc:"Ghetto Crew op zijn best." },
    { id:6,  artist:"GHETTO CREW",      title:"Atoekoeng Peleng",                genres:["DANCEHALL","REGGAE"], price:20.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1c/d9/af/1cd9af2d-72f5-b890-5893-462ec76ca4b8/198500405903.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Ghetto%20Crew%20Atoekoeng%20Peleng", desc:"Krachtige ritmes van Ghetto Crew." },
    { id:7,  artist:"GHETTO CREW",      title:"Full Pattato Modellato",          genres:["DANCEHALL","REGGAE"], price:20.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d6/49/01/d6490151-cba7-907b-8ba2-61186a7c9eeb/198500691481.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Ghetto%20Crew%20Full%20Pattato%20Modellato", desc:"Full Pattato Modellato — onvergetelijk." },
    { id:8,  artist:"MA ES",            title:"Mi Na Singi Man",                 genres:["WINTI"],              price:20.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/64/4f/5c/644f5cfd-4d55-e222-d82d-53bb3cd643d4/198595394687.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Ma%20Es%20Mi%20Na%20Singi%20Man", desc:"Ma Es met zijn meeslepende zangstijl." },
    { id:9,  artist:"PAPA TOUWTJIE",    title:"The Legend 4 Ever",               genres:["DANCEHALL","REGGAE"], price:20.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/9d/d6/92/9dd6925d-6867-5844-5255-fc84312e4cb7/198595489505.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Papa%20Touwtjie%20The%20Legend%204%20Ever", desc:"De legende leeft voort." },
    { id:10, artist:"PAWANA",           title:"Eromé Pawana Séwa Imyéro",        genres:["KAWINA"],             price:25.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/94/bf/11/94bf1118-81c5-a550-91e4-d0a1ec20992d/198595392720.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Pawana%20Erome%20Pawana%20Sewa", desc:"Een unieke mix van traditionele klanken en moderne beats.", scarcity:"LAATSTE 5" },
    { id:11, artist:"PEP",              title:"Ondrofeni (Special)",              genres:["ZOUK"],               price:20.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c2/0a/fc/c20afcb9-5fb3-7385-1e98-2c2b0e09b4ce/198500404777.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Pep%20Ondrofeni", desc:"Pep met een speciale editie van Ondrofeni.", scarcity:"OUT OF PRINT" },
    { id:12, artist:"STIMOFO",          title:"Fodu Yowé",                       genres:["WINTI"],              price:24.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b5/74/c2/b574c2ce-7e38-6758-114d-ef06032610ee/199199623111.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Stimofo%20Fodu%20Yowe", desc:"De beste Winti band van Suriname. Nu op vinyl.", scarcity:"UITVERKOCHT" },
    { id:13, artist:"STIMOFO",          title:"Ma Pete Mama",                    genres:["WINTI"],              price:20.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fd/36/37/fd363737-532a-f3cd-e30e-52a364a312fb/198595393635.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Stimofo%20Ma%20Pete%20Mama", desc:"Een ode aan de moeders van Suriname." },
    { id:14, artist:"STIMOFO",          title:"Marianna Trusu",                  genres:["WINTI"],              price:20.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/dc/a1/16/dca116a1-350b-7299-96cb-73eb2ac97be8/199199259105.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Stimofo%20Marianna%20Trusu", desc:"Marianna Trusu — pure Surinaamse energie." },
    { id:15, artist:"TAM",              title:"Hier Is Tam",                     genres:["KAWINA"],             price:20.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e5/cb/06/e5cb068e-2460-df24-b1ff-af43fefea6b1/198500691504.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Tam%20Hier%20Is%20Tam", desc:"Tam presenteert zich met zijn debuut." },
    { id:16, artist:"THE MESSENGERS",   title:"Wang Gado De",                    genres:["GOSPEL"],             price:18.50, img:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a2/af/c2/a2afc2c5-7931-958e-f768-2994f24d6c44/198595391556.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/The%20Messengers%20Wang%20Gado%20De", desc:"Spirituele klanken van The Messengers." },
    { id:17, artist:"THEO BIJLHOUT",    title:"Switi Kerst",                     genres:["GOSPEL"],             price:20.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d8/17/bd/d817bdf4-8bdd-c1ce-756a-9128ec1488e3/198999580334.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Theo%20Bijlhout%20Switi%20Kerst", desc:"Switi Kerst — feestelijke klanken van Theo Bijlhout." },
    { id:18, artist:"TJATJIE",          title:"Kon Go",                          genres:["DANCEHALL","REGGAE"], price:20.00, img:"cd-holder.jpg",     spotify:"https://open.spotify.com/album/7k7h8kYYNBUFUPG0UbPRMj", desc:"Tjatjie — Kon Go." },
    { id:19, artist:"NAKS KAWINA LOCO", title:"Kamergeheimen",                   genres:["KAWINA"],             price:20.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/85/c0/c9/85c0c9c6-030a-ea42-13cc-c07298d44e4b/cover.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/album/7vzGMoZLM6gJtltPr7P7vu", desc:"Naks Kawina Loco — Kamergeheimen." },
    { id:20, artist:"NAKS KASEKO LOKO", title:"Un Ne Prati",                     genres:["KASEKO"],             price:20.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/65/8f/20/658f202b-eb6a-b1db-2fad-a4ef55c0c784/cover.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/album/2NzhScJUwZPkPBrlT9C8Sc", desc:"Naks Kaseko Loko — Un Ne Prati." },
    { id:21, artist:"NAKS KASEKO LOKO", title:"Niks No Fout Re-Mix (Live)",      genres:["KASEKO"],             price:20.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/3d/14/ac/3d14ac25-866f-0be2-3af7-d8b9eddda4d2/cover.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/album/3AQJWqPjgoBlkD8xfaR7X0", desc:"Naks Kaseko Loko — live remix." },
    { id:22, artist:"NAKS KASEKO LOKO", title:"Live 2007",                       genres:["KASEKO"],             price:20.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/03/77/b5/0377b53e-878a-5f05-ac6b-141e749529bf/cover.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/album/7g5yUjIm9BbC3WJuENugJv", desc:"Naks Kaseko Loko — Live 2007." },
    { id:23, artist:"COMBINATIE XVI",   title:"Flamingo",                        genres:["GROOT BAZUIN"],       price:20.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1c/fa/14/1cfa14c1-a4b2-56f8-f314-4997b75d3dd7/cover.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/album/0UC7qVaFkKywCAd6wjOLUP", desc:"Combinatie XVI — Flamingo." },
    { id:24, artist:"COMBINATIE XVI",   title:"Live Tori Oso",                   genres:["GROOT BAZUIN"],       price:20.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ca/39/2a/ca392a93-2e1e-4612-b6eb-4e6898710243/cover.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/album/6zRCGwywKSHLSrx0asWdFm", desc:"Combinatie XVI — Live Tori Oso." },
    { id:25, artist:"COMBINATIE XVI",   title:"Losso",                           genres:["GROOT BAZUIN"],       price:20.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8d/35/bb/8d35bbbb-7ef6-920b-2e51-6dc3941a634c/cover.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/album/08XKmHZdMNdTZulYtNymS4", desc:"Combinatie XVI — Losso." },
    { id:26, artist:"COMBINATIE XVI",   title:"Combinatie XVI",                  genres:["GROOT BAZUIN"],       price:20.00, img:"https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ed/64/0b/ed640bc0-79bc-cb9c-8b1d-534dc460c248/cover.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/album/5Chj68ABpoZLaM51mK7PfT", desc:"Combinatie XVI." }
  ],
  merch: [
    { id:101, title:"LIMITED 'UNITY' JACKET",  price:120.00, img:"1.webp", badge:"LOW STOCK", desc:"Heavyweight canvas jacket met geborduurd ruglogo." },
    { id:102, title:"SIGNATURE HOODIE - ONYX", price:85.00,  img:"2.webp", badge:null,        desc:"Premium katoen, oversized fit." },
    { id:103, title:"ESSENTIAL TEE - BONE",    price:45.00,  img:"3.webp", badge:"NEW",       desc:"Zwaargewicht t-shirt met subtiele print." },
    { id:104, title:"TOUR CAP 2026",           price:35.00,  img:"4.webp", badge:null,        desc:"Verstelbare dad cap met 3D borduursel." },
    { id:105, title:"VINYL TOTE BAG",          price:25.00,  img:"5.webp", badge:null,        desc:"Stevige katoenen tas." }
  ],
  events: [
    { day:"20", month:"JUN", year:"2026", artist:"PAWANA",     venue:"PARADISO",         city:"AMSTERDAM", link:"#" },
    { day:"11", month:"JUL", year:"2026", artist:"FAJA WOWIA", venue:"TIVOLI VREDENBURG",city:"UTRECHT",   link:"#" },
    { day:"25", month:"JUL", year:"2026", artist:"STIMOFO",    venue:"013",              city:"TILBURG",   link:"#" }
  ],
  artists: [
    { id:"stimofo",       name:"STIMOFO",          genre:"WINTI",         origin:"Paramaribo, Suriname", active:"1985 – heden", bio:"Stimofo geldt als de meest invloedrijke Winti-band van Suriname. Hun muziek combineert ancestrale geestenrituelen met hedendaagse ritmes, en brengt de Afro-Surinaamse spirituele traditie levend naar een nieuw publiek.",  img:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b5/74/c2/b574c2ce-7e38-6758-114d-ef06032610ee/199199623111.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Stimofo", instagram:"#" },
    { id:"pawana",        name:"PAWANA",            genre:"KAWINA",        origin:"Suriname",             active:"2000 – heden", bio:"Pawana is een prominente naam in de Kawina-scene. Hun muziek weerspiegelt de Javaans-Surinaamse culturele fusie, met energieke polyritmes en traditionele zangstijlen die generaties verbinden.",                               img:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/94/bf/11/94bf1118-81c5-a550-91e4-d0a1ec20992d/198595392720.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Pawana", instagram:"#" },
    { id:"faja-wowia",    name:"FAJA WOWIA",        genre:"DANCEHALL",     origin:"Suriname",             active:"1995 – heden", bio:"Faja Wowia ('Vuur van Wowia') staat bekend om hun explosieve live-optredens. Ze versmolten Surinaams dancehall met reggae-invloeden en werden daarmee pioniers van de moderne Surinaamse urban sound.",                      img:"https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c2/87/e3/c287e3dc-8d89-9c1d-0da3-4a8f41971d97/198595420867.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Faja+Wowia", instagram:"#" },
    { id:"papa-touwtjie", name:"PAPA TOUWTJIE",     genre:"DANCEHALL",     origin:"Paramaribo, Suriname", active:"1990 – heden", bio:"Papa Touwtjie is een legende in de Surinaamse popmuziek. Met decennia aan hits en een onmiskenbare stijl is hij een symbool voor de kracht van Surinaams talent op het wereldpodium.",                                    img:"https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/9d/d6/92/9dd6925d-6867-5844-5255-fc84312e4cb7/198595489505.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Papa+Touwtjie", instagram:"#" },
    { id:"the-messengers",name:"THE MESSENGERS",    genre:"GOSPEL",        origin:"Suriname",             active:"2010 – heden", bio:"The Messengers verspreidt hun boodschap via krachtige gospelklanken die diepe wortels hebben in de Surinaamse kerktraditie. Hun muziek raakt harten en overstijgt grenzen.",                                              img:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a2/af/c2/a2afc2c5-7931-958e-f768-2994f24d6c44/198595391556.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/The+Messengers+Suriname", instagram:"#" },
    { id:"theo-bijlhout", name:"THEO BIJLHOUT",     genre:"GOSPEL",        origin:"Suriname",             active:"1980 – heden", bio:"Theo Bijlhout is een van de meest gerespecteerde namen in de Surinaamse gospel. Zijn rijke baritonstem en diepe overtuiging hebben hem tot een icoon gemaakt van christelijke muziek in de diaspora.",                      img:"https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d8/17/bd/d817bdf4-8bdd-c1ce-756a-9128ec1488e3/198999580334.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Theo+Bijlhout", instagram:"#" },
    { id:"ghetto-crew",   name:"GHETTO CREW",       genre:"DANCEHALL",     origin:"Paramaribo, Suriname", active:"1998 – heden", bio:"Ghetto Crew bracht de straatcultuur van Paramaribo naar platen. Ruw, eerlijk en onversneden — hun teksten documenteren het leven in de Surinaamse wijken en verbinden diasporajongeren wereldwijd.",                     img:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1c/d9/af/1cd9af2d-72f5-b890-5893-462ec76ca4b8/198500405903.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Ghetto+Crew+Suriname", instagram:"#" },
    { id:"groot-bazuin",  name:"GROOT BAZUIN",      genre:"GROOT BAZUIN",  origin:"Suriname",             active:"1980 – heden", bio:"Groot Bazuin is een van de meest invloedrijke culturele muziekorganisaties van Suriname. Onder hun vleugels vallen ensembles zoals Combinatie XVI, Naks Kawina Loco en Naks Kaseko Loko.",                                img:"https://i.scdn.co/image/ab67616d00001e02e57490f869d2f777d43aa351", spotify:"https://open.spotify.com/artist/1Y1TqVV4Ma5Nw1M8ms9O94", instagram:"#" },
    { id:"naks-kawina",   name:"NAKS KAWINA LOCO",  genre:"KAWINA",        origin:"Suriname",             active:"1975 – heden", bio:"Naks Kawina Loco is het kawina-ensemble van Groot Bazuin, opgericht ter bewaking en verspreiding van de traditionele kawina-muziek. Met energieke polyritmes en authentieke zangstijlen verbinden zij generaties.",       img:"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/85/c0/c9/85c0c9c6-030a-ea42-13cc-c07298d44e4b/cover.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/album/7vzGMoZLM6gJtltPr7P7vu", instagram:"#" },
    { id:"naks-kaseko",   name:"NAKS KASEKO LOKO",  genre:"KASEKO",        origin:"Suriname",             active:"1975 – heden", bio:"Naks Kaseko Loko is het kaseko-ensemble van Groot Bazuin, behoeder van de levendige kaseko-traditie. Hun muziek combineert blazers, percussie en dans in een onstuitbare groove.",                                        img:"https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/65/8f/20/658f202b-eb6a-b1db-2fad-a4ef55c0c784/cover.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/album/2NzhScJUwZPkPBrlT9C8Sc", instagram:"#" },
    { id:"combinatie-xvi",name:"COMBINATIE XVI",    genre:"GROOT BAZUIN",  origin:"Suriname",             active:"1980 – heden", bio:"Combinatie XVI is het veelzijdige ensemble van Groot Bazuin dat meerdere Surinaamse muziekstijlen samenbrengt. Hun live-optredens zijn legendarisch — een viering van Surinaamse culturele rijkdom.",                    img:"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1c/fa/14/1cfa14c1-a4b2-56f8-f314-4997b75d3dd7/cover.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/album/0UC7qVaFkKywCAd6wjOLUP", instagram:"#" },
    { id:"pep",           name:"PEP",               genre:"ZOUK",          origin:"Suriname",             active:"2005 – heden", bio:"PEP brengt sensualiteit en ritme samen in een unieke Surinaamse zouk-stijl. Zijn muziek weeft Caribbean romance en Surinaamse warmte tot een geluid dat grenzen overstijgt.",                                             img:"https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c2/0a/fc/c20afcb9-5fb3-7385-1e98-2c2b0e09b4ce/198500404777.jpg/600x600bb.jpg", spotify:"https://open.spotify.com/search/Pep+Suriname+Zouk", instagram:"#" }
  ]
};

// ---------------------------------------------------------------------------
// 2. HELPERS
// ---------------------------------------------------------------------------
const fmt = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' });
const imgSrc = (img) => img && img.startsWith('http') ? img : `../lols-main/lols-main/${img}`;

function showToast(msg) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-dot"></span>${msg}`;
  container.appendChild(toast);
  requestAnimationFrame(() => { requestAnimationFrame(() => toast.classList.add('show')); });
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 350); }, 2800);
}

// ---------------------------------------------------------------------------
// 3. MODULES
// ---------------------------------------------------------------------------
const Modules = {};

// ── RENDER ──
Modules.Render = {
  releases(items, container) {
    const grid = container || document.getElementById('releasesGrid');
    if (!grid) return;
    grid.innerHTML = items.map(r => `
      <article class="release-card reveal" data-id="${r.id}" onclick="Modules.UI.openModal(${r.id})">
        <div class="card-artwork">
          <img src="${imgSrc(r.img)}" alt="${r.title}" loading="lazy">
          <div class="card-overlay"></div>
          <button class="card-play-btn" onclick="event.stopPropagation();Modules.Audio.play(${r.id})" aria-label="Afspelen">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </button>
          ${r.scarcity ? `<span class="card-scarcity${r.scarcity==='OUT OF PRINT'||r.scarcity==='UITVERKOCHT'?' out':''}">${r.scarcity}</span>` : ''}
        </div>
        <div class="card-info">
          <div class="card-artist">${r.artist}</div>
          <div class="card-title">${r.title}</div>
          <div class="card-meta">${r.genres.map(g=>`<span class="genre-tag">${g}</span>`).join('')}</div>
          <div class="card-price">${fmt.format(r.price)}</div>
        </div>
      </article>`).join('');
    Modules.UX.observeReveal(grid.querySelectorAll('.reveal'));
  },

  merch(items, container) {
    const grid = container || document.getElementById('merchGrid');
    if (!grid) return;
    grid.innerHTML = items.map(m => `
      <article class="merch-card reveal">
        <div class="merch-artwork">
          <img src="${imgSrc(m.img)}" alt="${m.title}" loading="lazy">
          <span class="merch-badge-price">${fmt.format(m.price)}</span>
          ${m.badge ? `<span class="merch-badge-status ${m.badge==='NEW'?'new':'low'}">${m.badge}</span>` : ''}
        </div>
        <div class="merch-info">
          <div class="merch-name">${m.title}</div>
          <div class="merch-desc">${m.desc}</div>
          <button class="btn-primary merch-add-btn" onclick="Modules.Cart.add({id:${m.id},title:'${m.title.replace(/'/g,"\\'")}',price:${m.price},img:'${m.img}',type:'merch'})">
            In winkelwagen
          </button>
        </div>
      </article>`).join('');
    Modules.UX.observeReveal(grid.querySelectorAll('.reveal'));
  },

  agenda(events, container) {
    const list = container || document.getElementById('eventsList');
    if (!list) return;
    list.innerHTML = events.map(e => `
      <div class="event-item reveal">
        <div class="event-date">
          <div class="event-day">${e.day}</div>
          <div class="event-month">${e.month}</div>
        </div>
        <div class="event-info">
          <div class="event-info-artist">${e.artist}</div>
          <div class="event-info-venue">${e.venue}</div>
          <div class="event-info-city">${e.city}</div>
        </div>
        <a href="${e.link}" class="event-link" aria-label="Tickets voor ${e.artist}">Tickets</a>
      </div>`).join('');
    Modules.UX.observeReveal(list.querySelectorAll('.reveal'));
  },

  artists(items, container) {
    const grid = container || document.getElementById('artistsGrid');
    if (!grid) return;
    grid.innerHTML = items.map(a => `
      <article class="artist-card reveal">
        <div class="artist-photo">
          <img src="${imgSrc(a.img)}" alt="${a.name}" loading="lazy">
          <div class="artist-photo-overlay"></div>
          <div class="artist-photo-content">
            <div class="artist-name">${a.name}</div>
            <div class="artist-genre-tag">${a.genre}</div>
          </div>
        </div>
        <div class="artist-info">
          <div class="artist-origin">${a.origin} · ${a.active}</div>
          <div class="artist-bio">${a.bio}</div>
        </div>
      </article>`).join('');
    Modules.UX.observeReveal(grid.querySelectorAll('.reveal'));
  }
};

// ── UI (MODAL) ──
Modules.UI = {
  openModal(id) {
    const r = window.MOCK_DB.releases.find(x => x.id === id);
    if (!r) return;
    const overlay = document.getElementById('productModal');
    if (!overlay) return;
    overlay.querySelector('#modalArt').src = imgSrc(r.img);
    overlay.querySelector('#modalArt').alt = r.title;
    overlay.querySelector('#modalArtist').textContent = r.artist;
    overlay.querySelector('#modalAlbum').textContent = r.title;
    overlay.querySelector('#modalDesc').textContent = r.desc;
    overlay.querySelector('#modalPrice').textContent = fmt.format(r.price);
    overlay.querySelector('#modalGenres').innerHTML = r.genres.map(g => `<span class="genre-tag">${g}</span>`).join('');
    overlay.querySelector('#modalScarcity').textContent = r.scarcity || '';
    overlay.querySelector('#modalAddBtn').onclick = () => {
      Modules.Cart.add({ id: r.id, title: r.title, price: r.price, img: r.img, type: 'release', artist: r.artist });
      this.closeModal();
    };
    overlay.querySelector('#modalPlayBtn').onclick = () => Modules.Audio.play(r.id);
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  },
  closeModal() {
    const overlay = document.getElementById('productModal');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
};

// ── CART ──
Modules.Cart = {
  items: JSON.parse(localStorage.getItem('sh_cart') || '[]'),

  save() { localStorage.setItem('sh_cart', JSON.stringify(this.items)); },

  add(item) {
    const existing = this.items.find(i => i.id === item.id && i.type === item.type);
    if (existing) { existing.qty = (existing.qty || 1) + 1; }
    else { this.items.push({ ...item, qty: 1 }); }
    this.save();
    this.updateBadge();
    this.renderItems();
    showToast(`${item.title} toegevoegd`);
  },

  remove(id, type) {
    this.items = this.items.filter(i => !(i.id === id && i.type === type));
    this.save();
    this.updateBadge();
    this.renderItems();
  },

  total() { return this.items.reduce((s, i) => s + i.price * (i.qty || 1), 0); },

  count() { return this.items.reduce((s, i) => s + (i.qty || 1), 0); },

  updateBadge() {
    const badge = document.getElementById('cartBadge');
    const cnt = this.count();
    if (badge) {
      badge.textContent = cnt;
      badge.style.display = cnt > 0 ? 'flex' : 'none';
    }
  },

  renderItems() {
    const container = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    if (!container) return;
    if (this.items.length === 0) {
      container.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">♪</div><p>Je winkelwagen is leeg</p></div>`;
    } else {
      container.innerHTML = this.items.map(i => `
        <div class="cart-item">
          <img class="cart-item-img" src="${imgSrc(i.img)}" alt="${i.title}">
          <div class="cart-item-info">
            <div class="cart-item-name">${i.title}</div>
            <div class="cart-item-price">${fmt.format(i.price)} × ${i.qty || 1}</div>
          </div>
          <button class="cart-item-remove" onclick="Modules.Cart.remove(${i.id},'${i.type}')" aria-label="Verwijderen">✕</button>
        </div>`).join('');
    }
    if (totalEl) totalEl.textContent = fmt.format(this.total());
  },

  open() {
    const modal = document.getElementById('cartModal');
    const bg = document.getElementById('cartOverlayBg');
    if (modal) modal.classList.add('open');
    if (bg) bg.classList.add('open');
    this.renderItems();
  },

  close() {
    const modal = document.getElementById('cartModal');
    const bg = document.getElementById('cartOverlayBg');
    if (modal) modal.classList.remove('open');
    if (bg) bg.classList.remove('open');
  }
};

// ── AUDIO ──
Modules.Audio = {
  current: null,
  audioEl: new Audio(),
  isPlaying: false,

  play(id) {
    const release = window.MOCK_DB.releases.find(r => r.id === id);
    if (!release) return;
    const bar = document.getElementById('audioBar');
    if (bar) bar.classList.remove('hidden');
    const artEl = document.getElementById('audioArt');
    const trackEl = document.getElementById('audioTrack');
    const artistEl = document.getElementById('audioArtist');
    if (artEl) artEl.src = imgSrc(release.img);
    if (trackEl) trackEl.textContent = release.title;
    if (artistEl) artistEl.textContent = release.artist;
    this.current = id;
    this.audioEl.pause();
    this.audioEl.src = '';
    if (release.spotify && release.spotify.includes('/track/')) {
      const trackId = release.spotify.split('/track/')[1].split('?')[0];
      fetch(`https://itunes.apple.com/lookup?id=${trackId}&entity=song&limit=1`)
        .then(r => r.json()).then(d => {
          if (d.results?.[0]?.previewUrl) {
            this.audioEl.src = d.results[0].previewUrl;
            this.audioEl.play().catch(() => {});
          }
        }).catch(() => {});
    }
    this.updatePlayBtn();
  },

  toggle() {
    if (this.audioEl.paused) { this.audioEl.play().catch(() => {}); }
    else { this.audioEl.pause(); }
    this.updatePlayBtn();
  },

  updatePlayBtn() {
    const btn = document.getElementById('audioPlayBtn');
    if (!btn) return;
    btn.innerHTML = this.audioEl.paused
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
  },

  initProgressBar() {
    const fill = document.getElementById('audioFill');
    const track = document.getElementById('audioTrackBar');
    const timeEl = document.getElementById('audioTime');
    this.audioEl.addEventListener('timeupdate', () => {
      if (!this.audioEl.duration) return;
      const pct = (this.audioEl.currentTime / this.audioEl.duration) * 100;
      if (fill) fill.style.width = pct + '%';
      const cur = Math.floor(this.audioEl.currentTime);
      const dur = Math.floor(this.audioEl.duration);
      if (timeEl) timeEl.textContent = `${String(Math.floor(cur/60)).padStart(2,'0')}:${String(cur%60).padStart(2,'0')} / ${String(Math.floor(dur/60)).padStart(2,'0')}:${String(dur%60).padStart(2,'0')}`;
    });
    this.audioEl.addEventListener('play', () => this.updatePlayBtn());
    this.audioEl.addEventListener('pause', () => this.updatePlayBtn());
    this.audioEl.addEventListener('ended', () => { if (fill) fill.style.width = '0%'; this.updatePlayBtn(); });
    if (track) {
      track.addEventListener('click', e => {
        const rect = track.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;
        if (this.audioEl.duration) this.audioEl.currentTime = pct * this.audioEl.duration;
      });
    }
    const vol = document.getElementById('volumeSlider');
    if (vol) { vol.value = 0.8; this.audioEl.volume = 0.8; vol.addEventListener('input', () => { this.audioEl.volume = vol.value; }); }
  }
};

// ── SEARCH ──
Modules.Search = {
  open() {
    const overlay = document.getElementById('searchOverlay');
    if (overlay) { overlay.classList.add('open'); overlay.querySelector('.search-field')?.focus(); }
  },
  close() {
    const overlay = document.getElementById('searchOverlay');
    if (overlay) overlay.classList.remove('open');
  },
  query(q) {
    const results = document.getElementById('searchResults');
    if (!results) return;
    if (!q.trim()) { results.innerHTML = ''; return; }
    const lower = q.toLowerCase();
    const hits = window.MOCK_DB.releases.filter(r =>
      r.artist.toLowerCase().includes(lower) || r.title.toLowerCase().includes(lower) || r.genres.some(g => g.toLowerCase().includes(lower))
    );
    results.innerHTML = hits.map(r => `
      <article class="release-card" onclick="Modules.Search.close();Modules.UI.openModal(${r.id})" style="cursor:pointer">
        <div class="card-artwork"><img src="${imgSrc(r.img)}" alt="${r.title}" loading="lazy"></div>
        <div class="card-info">
          <div class="card-artist">${r.artist}</div>
          <div class="card-title">${r.title}</div>
          <div class="card-price">${fmt.format(r.price)}</div>
        </div>
      </article>`).join('') || '<p style="color:var(--heritage-dust);font-size:14px">Geen resultaten gevonden.</p>';
  }
};

// ── UX (REVEAL / COUNTUP) ──
Modules.UX = {
  revealObserver: null,

  observeReveal(elements) {
    if (!this.revealObserver) {
      this.revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 70);
            this.revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
    }
    elements.forEach(el => this.revealObserver.observe(el));
  },

  initCountUp() {
    const stats = document.querySelectorAll('.stat-number[data-target]');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        let startTime = null;
        const duration = 1400;
        const step = (ts) => {
          if (!startTime) startTime = ts;
          const progress = Math.min((ts - startTime) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          el.textContent = prefix + Math.floor(ease * target) + suffix;
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = prefix + target + suffix;
        };
        requestAnimationFrame(step);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 });
    stats.forEach(el => obs.observe(el));
  },

  initRevealAll() {
    this.observeReveal(document.querySelectorAll('.reveal'));
  }
};

// ── MOBILE NAV ──
Modules.Mobile = {
  init() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const closeBtn = document.getElementById('mobileNavClose');
    if (!hamburger || !mobileNav) return;
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
    if (closeBtn) closeBtn.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    }));
  }
};

// ── TICKER ──
Modules.Ticker = {
  init() {
    const track = document.getElementById('tickerTrack');
    if (!track) return;
    const artists = window.MOCK_DB.artists.map(a => a.name);
    const items = [...artists, ...artists].map(name =>
      `<span class="ticker-item">${name}<span class="ticker-dot">◆</span></span>`
    ).join('');
    track.innerHTML = items + items; // duplicate for seamless loop
  }
};

// ── HERO ANIMATION ──
function initHeroAnimation() {
  const heritage = document.querySelector('.hero-heritage');
  if (!heritage) return;
  const text = heritage.textContent;
  heritage.innerHTML = text.split('').map((l, i) =>
    `<span class="letter" style="animation-delay:${700 + i * 50}ms">${l === ' ' ? '&nbsp;' : l}</span>`
  ).join('');
}

// ── GENRE FILTER (homepage preview) ──
function initGenreFilter(releases) {
  const bar = document.getElementById('filterBar');
  if (!bar) return;
  bar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const genre = btn.dataset.genre;
    const filtered = genre === 'ALLES' ? releases.slice(0, 8) : releases.filter(r => r.genres.includes(genre)).slice(0, 8);
    Modules.Render.releases(filtered);
  });
}

// ---------------------------------------------------------------------------
// 4. GLOBAL EVENT BINDINGS
// ---------------------------------------------------------------------------
function initGlobalEvents() {
  // Cart toggle
  const cartBtn = document.getElementById('cartBtn');
  if (cartBtn) cartBtn.addEventListener('click', () => Modules.Cart.open());
  const cartClose = document.getElementById('cartClose');
  if (cartClose) cartClose.addEventListener('click', () => Modules.Cart.close());
  const cartBg = document.getElementById('cartOverlayBg');
  if (cartBg) cartBg.addEventListener('click', () => Modules.Cart.close());

  // Search
  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) searchBtn.addEventListener('click', () => Modules.Search.open());
  const searchClose = document.getElementById('searchCloseBtn');
  if (searchClose) searchClose.addEventListener('click', () => Modules.Search.close());
  const searchField = document.getElementById('searchField');
  if (searchField) {
    searchField.addEventListener('input', e => Modules.Search.query(e.target.value));
    searchField.addEventListener('keydown', e => { if (e.key === 'Escape') Modules.Search.close(); });
  }

  // Product modal close
  const modalClose = document.getElementById('modalClose');
  if (modalClose) modalClose.addEventListener('click', () => Modules.UI.closeModal());
  const modalOverlay = document.getElementById('productModal');
  if (modalOverlay) modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) Modules.UI.closeModal(); });

  // Audio bar
  const audioPlayBtn = document.getElementById('audioPlayBtn');
  if (audioPlayBtn) audioPlayBtn.addEventListener('click', () => Modules.Audio.toggle());
  const audioClose = document.getElementById('audioClose');
  if (audioClose) audioClose.addEventListener('click', () => {
    Modules.Audio.audioEl.pause();
    document.getElementById('audioBar')?.classList.add('hidden');
  });

  // Keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      Modules.UI.closeModal();
      Modules.Search.close();
      Modules.Cart.close();
    }
  });
}

// ---------------------------------------------------------------------------
// 5. INIT
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const db = window.MOCK_DB;
  const isHomepage = !!document.getElementById('heroText');
  const isReleasesPage = !!document.getElementById('filterBar') && !isHomepage;

  // Render sections that exist on this page
  if (isHomepage) {
    Modules.Render.releases(db.releases.slice(0, 8));
    Modules.Render.agenda(db.events);
    Modules.Render.merch(db.merch.slice(0, 3), document.getElementById('merchPreviewGrid'));
    initGenreFilter(db.releases);
    initHeroAnimation();
    Modules.UX.initCountUp();
  }
  if (isReleasesPage) {
    Modules.Render.releases(db.releases);
  }
  if (document.getElementById('artistsGrid')) Modules.Render.artists(db.artists);
  if (document.getElementById('merchGrid')) Modules.Render.merch(db.merch);
  if (document.getElementById('eventsList') && !isHomepage) Modules.Render.agenda(db.events);

  Modules.Ticker.init();
  Modules.Mobile.init();
  Modules.Audio.initProgressBar();
  Modules.Cart.updateBadge();
  Modules.UX.initRevealAll();
  initGlobalEvents();

  // Genre filter for releases page
  if (isReleasesPage) {
    const filterBar = document.getElementById('filterBar');
    if (filterBar) {
      filterBar.addEventListener('click', e => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const genre = btn.dataset.genre;
        const filtered = genre === 'ALLES' ? db.releases : db.releases.filter(r => r.genres.includes(genre));
        Modules.Render.releases(filtered);
      });
    }
  }
});
