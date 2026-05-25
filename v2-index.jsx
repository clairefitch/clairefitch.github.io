// Direction 2 — "Index"
// Archival / library catalogue feel. Minimal hero (name + tagline only),
// content begins immediately as a tabular index of works.

const v2 = {
  paper: '#faf8f3',
  ink: '#0d0d0c',
  rule: 'rgba(13,13,12,0.16)',
  muted: 'rgba(13,13,12,0.55)',
  faint: 'rgba(13,13,12,0.38)',
};

const v2Css = `
.v2 { background: ${v2.paper}; color: ${v2.ink}; font-family: 'EB Garamond', Garamond, serif; font-size: 17px; line-height: 1.6; }
.v2-mono { font-family: 'JetBrains Mono', ui-monospace, Menlo, monospace; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; }
.v2-display { font-family: 'EB Garamond', serif; font-style: italic; font-weight: 400; letter-spacing: -0.01em; }
.v2 a { color: inherit; text-decoration: none; background-image: linear-gradient(${v2.ink}, ${v2.ink}); background-size: 100% 1px; background-repeat: no-repeat; background-position: 0 100%; }
.v2 a:hover { background-image: linear-gradient(${v2.ink}, ${v2.ink}); background-size: 100% 2px; }
.v2-row { display: grid; grid-template-columns: 56px 64px 1fr 1fr 120px; gap: 24px; padding: 14px 0; border-top: 1px solid ${v2.rule}; align-items: baseline; }
.v2-row:hover { background: rgba(13,13,12,0.025); }
.v2-section-head { display: grid; grid-template-columns: 56px 64px 1fr 1fr 120px; gap: 24px; padding: 8px 0; border-top: 2px solid ${v2.ink}; align-items: baseline; }
`;

function V2Header() {
  return (
    <div style={{ padding: '24px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1px solid ${v2.rule}` }}>
      <div className="v2-mono">Claire Fitch — Index of Works, 1995–2026</div>
      <div className="v2-mono" style={{ color: v2.muted, display: 'flex', gap: 28 }}>
        <a href="#sonic-art" style={{ background: 'none' }}>Sonic Art</a>
        <a href="#electronic-literature" style={{ background: 'none' }}>E-Lit</a>
        <a href="#game-scores" style={{ background: 'none' }}>Game Scores</a>
        <a href="#publications" style={{ background: 'none' }}>Publications</a>
        <a href="#production" style={{ background: 'none' }}>Production</a>
        <a href="#about" style={{ background: 'none' }}>About</a>
      </div>
    </div>
  );
}

function V2Hero() {
  return (
    <section style={{ padding: '120px 56px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, borderBottom: `1px solid ${v2.rule}` }}>
      <div>
        <div className="v2-mono" style={{ color: v2.muted, marginBottom: 24 }}>FHEA · PhD QUB SARC · Lecturer, DkIT</div>
        <h1 style={{ margin: 0, fontFamily: "'EB Garamond', serif", fontSize: 92, fontWeight: 400, lineHeight: 1, letterSpacing: '-0.02em' }}>
          Claire Fitch.
        </h1>
        <p className="v2-display" style={{ fontSize: 28, lineHeight: 1.35, marginTop: 28, marginBottom: 0, color: v2.muted, textWrap: 'balance' }}>
          Sonic art, electronic literature, game scores, publications and production music — catalogued.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignContent: 'start' }}>
        <Stat label="Works catalogued" value="58" />
        <Stat label="First entry" value="1995" />
        <Stat label="Conferences" value="ELO · ISSTA · Kylie" />
        <Stat label="Festivals" value="Music Current · HearSay · SPIKE" />
        <Stat label="Broadcast" value="RTÉ Lyric FM · Radio One" />
        <Stat label="Monograph" value="Routledge, 2022" />
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div style={{ borderTop: `1px solid ${v2.rule}`, paddingTop: 14 }}>
      <div className="v2-mono" style={{ color: v2.faint, marginBottom: 6 }}>{label}</div>
      <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 24, fontStyle: 'italic' }}>{value}</div>
    </div>
  );
}

function V2Section({ id, num, title, count, indexHref, summary, entries }) {
  return (
    <section id={id} style={{ padding: '80px 56px 56px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr 140px', gap: 40, alignItems: 'baseline', marginBottom: 36 }}>
        <div className="v2-mono" style={{ color: v2.faint }}>{num} /</div>
        <h2 style={{ margin: 0, fontFamily: "'EB Garamond', serif", fontSize: 64, fontWeight: 400, letterSpacing: '-0.015em', lineHeight: 1 }}>{title}</h2>
        <p style={{ margin: 0, color: v2.muted, fontStyle: 'italic', fontSize: 18, textWrap: 'pretty' }}>{summary}</p>
        <div style={{ textAlign: 'right' }}>
          <div className="v2-mono" style={{ color: v2.faint }}>{count} entries</div>
          <a href={indexHref} className="v2-mono" style={{ marginTop: 6, display: 'inline-block' }}>Full index →</a>
        </div>
      </div>
      <div className="v2-section-head" style={{ color: v2.faint }}>
        <div className="v2-mono">No.</div>
        <div className="v2-mono">Year</div>
        <div className="v2-mono">Title</div>
        <div className="v2-mono">Venue / Publication</div>
        <div className="v2-mono" style={{ textAlign: 'right' }}>Format</div>
      </div>
      {entries.map((e, i) => (
        <div key={i} className="v2-row">
          <span className="v2-mono" style={{ color: v2.faint }}>{String(i + 1).padStart(3, '0')}</span>
          <span className="v2-mono">{e.year}</span>
          <span style={{ fontSize: 22, fontFamily: "'EB Garamond', serif" }}>
            <a href={e.href}>{e.title}</a>
            {e.note && <span style={{ color: v2.muted, fontStyle: 'italic', fontSize: 16, marginLeft: 10 }}>— {e.note}</span>}
          </span>
          <span style={{ color: v2.muted }}>{e.venue}</span>
          <span className="v2-mono" style={{ color: v2.muted, textAlign: 'right' }}>{e.format}</span>
        </div>
      ))}
    </section>
  );
}

function V2About() {
  return (
    <section id="about" style={{ padding: '96px 56px', borderTop: `2px solid ${v2.ink}`, display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: 40 }}>
      <div className="v2-mono" style={{ color: v2.faint }}>06 /</div>
      <div>
        <h2 style={{ margin: 0, fontFamily: "'EB Garamond', serif", fontSize: 64, fontWeight: 400, letterSpacing: '-0.015em', lineHeight: 1 }}>About.</h2>
        <p style={{ marginTop: 32, fontSize: 19, lineHeight: 1.6, textWrap: 'pretty' }}>
          Claire Fitch FHEA is a composer, sound artist, cellist and lecturer working at the intersection of electroacoustic composition, electronic literature and game design.
        </p>
        <p style={{ color: v2.muted, fontSize: 18, textWrap: 'pretty' }}>
          She completed her PhD at Queen's University Belfast's Sonic Arts Research Centre (SARC) in 2019, supervised by Professor Michael Alcorn, and is the author of <em>Sounding Emerging Media</em> (Routledge, 2022). She was a cellist with the RTÉ National Symphony Orchestra from 1995 to 2012, and since 2015 has been a lecturer in the Department of Creative Arts, Media and Music at Dundalk Institute of Technology.
        </p>
        <p style={{ color: v2.muted, fontSize: 18, textWrap: 'pretty' }}>
          Through her production company Fitchsounds she has provided audio for the European Commission, Intel, AMD, Adobe and the Blender Institute. She is an Avid ACI Instructor for Sibelius.
        </p>
      </div>
      <div>
        <div className="v2-mono" style={{ color: v2.faint, marginBottom: 12 }}>Selected venues &amp; conferences</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 2, fontStyle: 'italic' }}>
          <li>Electronic Literature Organisation — Cork, Florida, Bergen</li>
          <li>ISSTA — Irish Sound, Science and Technology Association</li>
          <li>Kylie: The Symposium</li>
          <li>Music Current · HearSay · Hilltown</li>
          <li>First Fortnight · SPIKE</li>
          <li>RTÉ Lyric FM · RTÉ Radio One</li>
        </ul>
        <div className="v2-mono" style={{ color: v2.faint, marginTop: 32, marginBottom: 12 }}>Correspondence</div>
        <p style={{ margin: 0, fontStyle: 'italic' }}><a href="mailto:claire@fitchsounds.com">claire@fitchsounds.com</a></p>
      </div>
    </section>
  );
}

function V2Footer() {
  const social = [
    ['Mastodon', 'https://mastodon.ie/@ambiencellist'],
    ['YouTube', 'https://www.youtube.com/channel/UCvAuMBbFlkFRf77hqLWBL9Q'],
    ['WordPress', 'https://clairefitch.wordpress.com/'],
    ['SoundCloud', 'https://soundcloud.com/ambiencellist'],
    ['Itch.io', 'https://ambiencellist.itch.io/'],
    ['Bandcamp', 'https://clairefitch.bandcamp.com/'],
    ['ORCiD', 'https://orcid.org/0000-0002-6686-9345'],
    ['LinkedIn', 'https://www.linkedin.com/in/fitchclaire/'],
  ];
  return (
    <footer style={{ padding: '48px 56px', borderTop: `1px solid ${v2.rule}`, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 16 }}>
      <div className="v2-mono" style={{ color: v2.faint }}>© Claire Fitch · All rights reserved · Set in EB Garamond &amp; JetBrains Mono</div>
      <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
        {social.map(([n, h]) => <a key={n} href={h} className="v2-mono" style={{ background: 'none', color: v2.ink }}>{n}</a>)}
      </div>
    </footer>
  );
}

function V2Page() {
  return (
    <div className="v2" style={{ background: v2.paper, color: v2.ink, minHeight: '100%' }}>
      <style>{v2Css}</style>
      <V2Header />
      <V2Hero />
      <V2Section
        id="sonic-art" num="01" title="Sonic Art." count="14"
        indexHref="https://clairefitch.github.io/sonicart.html"
        summary="Practice-based works exploring voice, text and field, broadcast and performed across Ireland and the UK."
        entries={[
          { year: '2021', title: 'Becoming Imperceptible', note: 'commissioned, thirtythree-45 / Droichead Arts', venue: 'Drogheda, Ireland', format: 'Podcast', href: 'https://thirtythree-45.com/where-are-we-now-episode-1/' },
          { year: '2020', title: 'Murdering The Time', note: 'voice: Raven', venue: 'The Blue of The Night, RTÉ Lyric FM', format: 'Broadcast', href: 'https://soundcloud.com/clairefitch/murdering-the-time' },
          { year: '2020', title: 'Mrs Matchwell', note: 'voice: Martina Murray', venue: 'Scribbledehobble, Kaleidoscope, Dublin', format: 'Performance', href: 'https://www.youtube.com/watch?v=f_pzH9EKRLU' },
          { year: '2015', title: 'Written in his Voice', note: 'voice: Victor Daniels', venue: 'Sonic Lab, QUB, Belfast', format: 'Performance', href: 'https://youtu.be/ztqgyphYG6s' },
        ]}
      />
      <V2Section
        id="electronic-literature" num="02" title="Electronic Literature." count="9"
        indexHref="https://clairefitch.github.io/electronicliterature.html"
        summary="Transmedia works combining sound, text and image. Presented at the ELO conferences in Cork, Florida and Bergen."
        entries={[
          { year: '2014', title: 'Look (FFEBCD)', venue: 'HearSay Festival, Ireland', format: 'Web · Audio', href: 'https://clairefitch.github.io/Look/Look.html' },
          { year: '2020', title: 'We Called It Dirt', note: 'samples: John Patrick McNamara', venue: 'ELO 2020, Florida (online)', format: 'Web · Audio', href: 'https://clairefitch.github.io/WCID/wecalleditdirt.html' },
          { year: '2021', title: 'Ear For The Surge', venue: 'ELO Covid E-Lit Exhibition, Bergen', format: 'Web', href: 'https://www.eliterature.org/elo2021/covid/' },
          { year: '2020', title: 'SFBookDraft1', note: 'with Kelly McErlean', venue: 'ELO 2020, Florida', format: 'Web · Twitter', href: 'https://twitter.com/Draft1Sf' },
        ]}
      />
      <V2Section
        id="game-scores" num="03" title="Game Scores." count="6"
        indexHref="https://clairefitch.github.io/gamescores.html"
        summary="Interactive scores treating gameplay as performance: page-turning, branching, mapping."
        entries={[
          { year: '2019', title: 'And The Birds Sang', venue: 'Music Current, Dublin', format: 'Game score', href: 'https://clairefitch.github.io/ATBS/atbs.html' },
          { year: '2019', title: 'Questioning The Elements', venue: 'SPIKE Alternative Cello Festival, Dublin', format: 'Game score', href: 'https://clairefitch.github.io/QTE/QuestioningTheElements.html' },
          { year: '2022', title: 'Tale Of A Great Sham(e)Text', venue: 'Sonorities Festival, Belfast', format: 'Game score', href: 'https://clairefitch.github.io/TGS/TGS.html' },
          { year: '2020', title: 'We Called It Dirt', note: 'gamescore version', venue: '—', format: 'Game score', href: 'https://clairefitch.github.io/WCID/wecalleditdirt.html' },
        ]}
      />
      <V2Section
        id="publications" num="04" title="Publications." count="4"
        indexHref="https://clairefitch.github.io/publications.html"
        summary="Across augmented reality, web and print: (RE)VERB #1 (2022), the ELO COVID Exhibition (2021), and Routledge (2022)."
        entries={[
          { year: '2022', title: 'Sounding Emerging Media', venue: 'Routledge', format: 'Monograph', href: 'https://www.routledge.com/Sounding-Emerging-Media/Fitch/p/book/9780367495480' },
          { year: '2022', title: 'Vanguard Voices', note: 'with K. McErlean & M. Murray', venue: '(RE)VERB #1, Gesso', format: 'AR · Web', href: 'https://gesso.fm/collections/vanguard-voices1' },
          { year: '2021', title: 'Folding, Unfolding, Refolding Sound', venue: 'Digital Art in Ireland, Anthem Press', format: 'Chapter', href: 'https://anthempress.com/digital-art-in-ireland-pdf' },
          { year: '2020', title: 'Becoming Imperceptible', venue: 'Where Are We Now? #1, thirtythree-45', format: 'Podcast', href: 'https://thirtythree-45.com/where-are-we-now-episode-1/' },
        ]}
      />
      <V2Section
        id="production" num="05" title="Production Music &amp; SFX." count="20+ yrs"
        indexHref="https://clairefitch.github.io/productionmusic.html"
        summary="Twenty years of catalogue music and sound effects for television, film, games and podcasts."
        entries={[
          { year: '2023', title: 'Another Day', venue: 'Magnatune', format: 'Album', href: 'http://magnatune.com/artists/fitch/' },
          { year: '2009', title: 'Celocity', venue: 'Magnatune', format: 'Album', href: 'http://magnatune.com/artists/fitch/' },
          { year: '2005', title: 'Ambiencellist Part II', venue: 'Magnatune', format: 'Album', href: 'http://magnatune.com/artists/fitch/' },
          { year: '2003', title: 'Ambiencellist', venue: 'Magnatune', format: 'Album', href: 'http://magnatune.com/artists/fitch/' },
          { year: '—',    title: 'Stock libraries', venue: 'FilmPac · Pond5 · Deposit Photos · MotionElements', format: 'Catalogue', href: 'https://filmpac.com/music/artists/A00213/ambiencellist/' },
        ]}
      />
      <V2About />
      <V2Footer />
    </div>
  );
}

window.V2Page = V2Page;
