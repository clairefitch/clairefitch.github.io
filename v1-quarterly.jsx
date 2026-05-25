// Direction 1 — "Quarterly"
// Editorial masthead, serif-led, cream paper, generous whitespace.
// Hero: Big name + role + merged bio + numbered section index.

const v1 = {
  paper: '#f3ecdc',
  ink: '#1c1915',
  rule: 'rgba(28,25,21,0.18)',
  muted: 'rgba(28,25,21,0.62)',
  faint: 'rgba(28,25,21,0.4)',
  accent: 'oklch(0.52 0.11 35)', // restrained rust
};

const v1Css = `
.v1 { background: ${v1.paper}; color: ${v1.ink}; font-family: 'Cormorant Garamond', 'EB Garamond', Garamond, serif; font-size: 18px; line-height: 1.55; }
.v1 *::selection { background: ${v1.ink}; color: ${v1.paper}; }
.v1-mono { font-family: 'JetBrains Mono', ui-monospace, Menlo, monospace; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; }
.v1-sans { font-family: 'Inter Tight', 'Inter', system-ui, sans-serif; }
.v1-display { font-family: 'Cormorant Garamond', serif; font-weight: 500; letter-spacing: -0.02em; line-height: 0.92; }
.v1-rule { border-top: 1px solid ${v1.rule}; }
.v1 a { color: inherit; text-decoration: none; border-bottom: 1px solid ${v1.faint}; transition: border-color .15s; }
.v1 a:hover { border-bottom-color: ${v1.ink}; }
.v1-link-arrow::after { content: ' →'; }
`;

function V1Nav() {
  const items = ['Sonic Art', 'Electronic Literature', 'Game Scores', 'Publications', 'Production Music', 'About'];
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '24px 64px', borderBottom: `1px solid ${v1.rule}` }}>
      <div className="v1-mono" style={{ color: v1.ink }}>Claire Fitch &nbsp;·&nbsp; clairefitch.com</div>
      <div className="v1-mono" style={{ display: 'flex', gap: 24, color: v1.muted }}>
        {items.map(i => <a key={i} href={`#${i.toLowerCase().replace(/\s+/g, '-')}`} style={{ borderBottom: 'none' }}>{i}</a>)}
      </div>
    </div>
  );
}

function V1Masthead() {
  return (
    <header style={{ padding: '96px 64px 80px' }}>
      <div className="v1-mono" style={{ color: v1.muted, marginBottom: 40 }}>
        Volume IV &nbsp;·&nbsp; Dublin &amp; Belfast &nbsp;·&nbsp; MMXXVI
      </div>
      <h1 className="v1-display" style={{ fontSize: 168, margin: 0, marginBottom: 32 }}>
        Claire&nbsp;Fitch
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, marginTop: 56 }}>
        <div>
          <div className="v1-mono" style={{ color: v1.accent, marginBottom: 14 }}>The Practice</div>
          <p style={{ fontSize: 22, lineHeight: 1.45, margin: 0, fontStyle: 'italic', color: v1.ink, textWrap: 'pretty' }}>
            Composer, sound artist, cellist and lecturer working at the intersection of electroacoustic composition, electronic literature and game design.
          </p>
          <p style={{ marginTop: 22, color: v1.muted, textWrap: 'pretty' }}>
            Completed her PhD at Queen's University Belfast's Sonic Arts Research Centre (SARC) in 2019, and is the author of <em>Sounding Emerging Media</em> (Routledge, 2022). Cellist with the RTÉ National Symphony Orchestra from 1995 to 2012; since 2015 a lecturer in the Department of Creative Arts, Media and Music at Dundalk Institute of Technology. Through Fitchsounds she has provided audio for the European Commission, Intel, AMD, Adobe and the Blender Institute. Avid ACI Instructor for Sibelius.
          </p>
        </div>
        <div>
          <div className="v1-mono" style={{ color: v1.accent, marginBottom: 14 }}>In this Issue</div>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 21, lineHeight: 1.9 }}>
            {[
              ['I.', 'Sonic Art', 'Becoming Imperceptible, Murdering The Time'],
              ['II.', 'Electronic Literature', 'Look (FFEBCD), Ear For The Surge'],
              ['III.', 'Game Scores', 'And The Birds Sang, Questioning The Elements'],
              ['IV.', 'Publications', 'Sounding Emerging Media (Routledge, 2022)'],
              ['V.', 'Production Music', 'Magnatune, FilmPac, Pond5 &amp; others'],
            ].map(([n, t, sub]) => (
              <li key={n} style={{ display: 'grid', gridTemplateColumns: '40px 1fr auto', alignItems: 'baseline', borderBottom: `1px dotted ${v1.rule}`, paddingBottom: 6, marginBottom: 6 }}>
                <span className="v1-mono" style={{ color: v1.faint }}>{n}</span>
                <span>{t} <span style={{ color: v1.muted, fontSize: 15, fontStyle: 'italic' }}>— {sub}</span></span>
                <span className="v1-mono" style={{ color: v1.faint }}>p. {String(Number(n.length) * 4 + 11).padStart(2, '0')}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </header>
  );
}

function V1Feature({ id, num, title, kicker, body, img, link, links }) {
  return (
    <section id={id} className="v1-rule" style={{ padding: '80px 64px', display: 'grid', gridTemplateColumns: '160px 1fr 1fr', gap: 56 }}>
      <div>
        <div className="v1-display" style={{ fontSize: 84, color: v1.accent, lineHeight: 1 }}>{num}</div>
        <div className="v1-mono" style={{ marginTop: 8, color: v1.muted }}>{kicker}</div>
      </div>
      <div>
        <h2 className="v1-display" style={{ fontSize: 56, margin: 0, marginBottom: 22 }}>{title}</h2>
        <p style={{ fontSize: 19, color: v1.muted, margin: 0, textWrap: 'pretty' }}>{body}</p>
        <div className="v1-mono" style={{ marginTop: 36 }}>
          <a href={link} className="v1-link-arrow">Index of works</a>
        </div>
      </div>
      <div>
        {img && (
          <div style={{ aspectRatio: '4/5', background: `url(${img}) center/cover`, marginBottom: 16, filter: 'sepia(0.08) contrast(0.96)' }} />
        )}
        <div className="v1-mono" style={{ color: v1.faint, marginBottom: 16 }}>Selected Works</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {links.map((l, i) => (
            <li key={i} style={{ display: 'grid', gridTemplateColumns: '44px 1fr', alignItems: 'baseline', padding: '10px 0', borderTop: `1px solid ${v1.rule}` }}>
              <span className="v1-mono" style={{ color: v1.faint }}>{l.year}</span>
              <span>
                <a href={l.href} style={{ borderBottom: 'none' }}>{l.title}</a>
                <span style={{ display: 'block', fontSize: 14, color: v1.muted, fontStyle: 'italic', marginTop: 2 }}>{l.note}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function V1Footer() {
  return (
    <footer className="v1-rule" style={{ padding: '64px 64px 48px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48 }}>
      <div>
        <div className="v1-display" style={{ fontSize: 36, lineHeight: 1 }}>Correspondence</div>
        <p style={{ color: v1.muted, marginTop: 14, maxWidth: 380 }}>
          For commissions, lectures and licensing enquiries, please write to <a href="mailto:claire@fitchsounds.com">claire@fitchsounds.com</a>.
        </p>
      </div>
      <div>
        <div className="v1-mono" style={{ color: v1.faint, marginBottom: 14 }}>Listen &amp; Watch</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 2 }}>
          <li><a href="https://soundcloud.com/ambiencellist">SoundCloud</a></li>
          <li><a href="https://clairefitch.bandcamp.com/">Bandcamp</a></li>
          <li><a href="https://www.youtube.com/channel/UCvAuMBbFlkFRf77hqLWBL9Q">YouTube</a></li>
          <li><a href="https://ambiencellist.itch.io/">Itch.io</a></li>
        </ul>
      </div>
      <div>
        <div className="v1-mono" style={{ color: v1.faint, marginBottom: 14 }}>Elsewhere</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 2 }}>
          <li><a href="https://mastodon.ie/@ambiencellist">Mastodon</a></li>
          <li><a href="https://www.linkedin.com/in/fitchclaire/">LinkedIn</a></li>
          <li><a href="https://clairefitch.wordpress.com/">WordPress</a></li>
          <li><a href="https://orcid.org/0000-0002-6686-9345">ORCiD</a></li>
        </ul>
      </div>
      <div className="v1-mono" style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-between', color: v1.faint, marginTop: 32 }}>
        <span>© Claire Fitch · Dublin &amp; Belfast</span>
        <span>Set in Cormorant &amp; Inter Tight</span>
      </div>
    </footer>
  );
}

function V1Page() {
  return (
    <div className="v1" style={{ background: v1.paper, color: v1.ink, minHeight: '100%' }}>
      <style>{v1Css}</style>
      <V1Nav />
      <V1Masthead />
      <V1Feature
        id="sonic-art" num="I." kicker="Section One"
        title="Sonic Art"
        body="Practice-based research at the convergence of digital technology, audio, visuals and text. Work commissioned and broadcast across Ireland and the UK; performed in Dublin, Belfast, Drogheda and beyond."
        img="https://clairefitch.github.io/images/BI-1.jpg"
        link="https://clairefitch.github.io/sonicart.html"
        links={[
          { year: '2021', title: 'Becoming Imperceptible', note: 'thirtythree-45 / Droichead Arts, Drogheda', href: 'https://thirtythree-45.com/where-are-we-now-episode-1/' },
          { year: '2020', title: 'Murdering The Time', note: 'Broadcast, The Blue of The Night, RTÉ Lyric FM', href: 'https://soundcloud.com/clairefitch/murdering-the-time' },
          { year: '2020', title: 'Mrs Matchwell', note: 'Scribbledehobble, Kaleidoscope, Dublin', href: 'https://www.youtube.com/watch?v=f_pzH9EKRLU' },
          { year: '2015', title: 'Written in his Voice', note: 'Sonic Lab, QUB, Belfast', href: 'https://youtu.be/ztqgyphYG6s' },
        ]}
      />
      <V1Feature
        id="electronic-literature" num="II." kicker="Section Two"
        title="Electronic Literature"
        body="Transmedia works combining sound, text and image, presented at the Electronic Literature Organisation conferences in Cork (2019), Florida (2020) and Bergen (2021)."
        img="https://clairefitch.github.io/images/WWNBS.jpg"
        link="https://clairefitch.github.io/electronicliterature.html"
        links={[
          { year: '2014', title: 'Look (FFEBCD)', note: 'HearSay Festival, Ireland', href: 'https://clairefitch.github.io/Look/Look.html' },
          { year: '2020', title: 'We Called It Dirt', note: 'with John Patrick McNamara (Michael J. Maguire)', href: 'https://clairefitch.github.io/WCID/wecalleditdirt.html' },
          { year: '2021', title: 'Ear For The Surge', note: 'ELO Covid E-Lit Exhibition, Bergen', href: 'https://www.eliterature.org/elo2021/covid/' },
          { year: '2020', title: 'SFBookDraft1', note: 'with Kelly McErlean, ELO, Florida', href: 'https://twitter.com/Draft1Sf' },
        ]}
      />
      <V1Feature
        id="game-scores" num="III." kicker="Section Three"
        title="Game Scores"
        body="Interactive scores treating gameplay as performance: page-turning, branching, mapping. Performed at Music Current (2019), SPIKE Alternative Cello Festival (2019) and Sonorities (2022)."
        img="https://clairefitch.github.io/images/ATBS-sq.jpg"
        link="https://clairefitch.github.io/gamescores.html"
        links={[
          { year: '2019', title: 'And The Birds Sang', note: 'Music Current, Dublin', href: 'https://clairefitch.github.io/ATBS/atbs.html' },
          { year: '2019', title: 'Questioning The Elements', note: 'SPIKE Alternative Cello Festival, Dublin', href: 'https://clairefitch.github.io/QTE/QuestioningTheElements.html' },
          { year: '2022', title: 'Tale Of A Great Sham(e)Text', note: 'Sonorities Festival, Belfast', href: 'https://clairefitch.github.io/TGS/TGS.html' },
          { year: '2020', title: 'We Called It Dirt', note: 'gamescore version', href: 'https://clairefitch.github.io/WCID/wecalleditdirt.html' },
        ]}
      />
      <V1Feature
        id="publications" num="IV." kicker="Section Four"
        title="Publications"
        body="Across augmented reality, web and print: (RE)VERB #1 (2022), the ELO COVID Exhibition (2021), and a monograph for Routledge (2022) on practice-based sonic art."
        img="https://clairefitch.github.io/images/PS.jpg"
        link="https://clairefitch.github.io/publications.html"
        links={[
          { year: '2022', title: 'Sounding Emerging Media', note: 'Routledge — monograph', href: 'https://www.routledge.com/Sounding-Emerging-Media/Fitch/p/book/9780367495480' },
          { year: '2022', title: 'Vanguard Voices', note: '(RE)VERB #1, with K. McErlean & M. Murray', href: 'https://gesso.fm/collections/vanguard-voices1' },
          { year: '2021', title: 'Folding, Unfolding, Refolding Sound', note: 'Digital Art in Ireland, Anthem Press', href: 'https://anthempress.com/digital-art-in-ireland-pdf' },
          { year: '2020', title: 'Becoming Imperceptible', note: 'Where Are We Now? #1, thirtythree-45', href: 'https://thirtythree-45.com/where-are-we-now-episode-1/' },
        ]}
      />
      <V1Feature
        id="production-music" num="V." kicker="Section Five"
        title="Production Music &amp; SFX"
        body="Twenty years of catalogue music and sound effects for television, film, games and podcasts. Albums licensable from Magnatune; royalty-free tracks across FilmPac, Pond5 and others."
        img="https://clairefitch.github.io/images/DepositPhotos.png"
        link="https://clairefitch.github.io/productionmusic.html"
        links={[
          { year: '2023', title: 'Another Day', note: 'Album · Magnatune', href: 'http://magnatune.com/artists/fitch/' },
          { year: '2009', title: 'Celocity', note: 'Album · Magnatune', href: 'http://magnatune.com/artists/fitch/' },
          { year: '2005', title: 'Ambiencellist Part II', note: 'Album · Magnatune', href: 'http://magnatune.com/artists/fitch/' },
          { year: '—',    title: 'Stock libraries', note: 'FilmPac, Pond5, Deposit Photos, MotionElements', href: 'https://filmpac.com/music/artists/A00213/ambiencellist/' },
        ]}
      />
      <V1Footer />
    </div>
  );
}

window.V1Page = V1Page;
