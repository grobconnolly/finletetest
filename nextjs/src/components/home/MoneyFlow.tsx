function Arrow({ green = false }: { green?: boolean }) {
  return <li className={green ? "marrow g" : "marrow"} aria-hidden="true" />;
}

export function MoneyFlow() {
  return (
    <section className="section money light slash-top" id="how-it-works">
      <div className="wrap">
        <div className="section-head">
          <h2 className="h2">Where the money goes</h2>
          <p className="lead">
            How a fan&apos;s investment reaches a player, and what happens either way.
          </p>
        </div>
        <div className="mflow">
          <div className="mrow">
            <div className="mrow-head">
              <span className="mrow-n">1</span>
              <h3>Today: the investment</h3>
            </div>
            <p className="mfirst">
              First, the athlete signs a 1% Income Share Agreement with Finlete: he agrees to pay
              Finlete 1% of his future MLB pay.
            </p>
            <ol className="mline">
              <li className="mnode">
                <b>Fans</b>
                <span>buy shares in his offering</span>
              </li>
              <Arrow />
              <li className="mnode hold">
                <b>Finlete</b>
                <span>sends him the capital</span>
                <em className="mtag">Holds his 1% Income Share Agreement</em>
              </li>
              <Arrow />
              <li className="mnode">
                <b>Athlete in the minors</b>
                <span>gets capital up front, with no debt</span>
              </li>
            </ol>
          </div>

          <div className="mrow">
            <div className="mrow-head">
              <span className="mrow-n">2</span>
              <h3>If he reaches MLB: the pay</h3>
              <span className="when">during the 25-year term</span>
            </div>
            <div
              className="mbar"
              role="img"
              aria-label="Of his MLB pay, 99% stays with the athlete and 1% goes to the agreement"
            >
              <i />
              <i />
            </div>
            <div className="msplit">
              <div className="mnode src">
                <b>MLB pay</b>
                <span>what MLB pays him</span>
              </div>
              <div className="mbr">
                <ol className="mline">
                  <li className="pct">99%</li>
                  <Arrow />
                  <li className="mnode">
                    <b>Athlete</b>
                    <span>keeps 99% of his MLB pay</span>
                  </li>
                </ol>
                <ol className="mline">
                  <li className="pct g">1%</li>
                  <Arrow green />
                  <li className="mnode doc">
                    <b>Finlete Income Share Agreement</b>
                    <span>Finlete collects the 1%</span>
                  </li>
                  <Arrow green />
                  <li className="mnode">
                    <b>Fans</b>
                    <span>Finlete passes it on, less a 10% management fee</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mrow">
            <div className="mrow-head">
              <span className="mrow-n off">3</span>
              <h3>If he never reaches MLB</h3>
            </div>
            <p className="mnever">
              There is no MLB pay, so nothing is paid. Investors lose their entire investment. He
              owes nothing back.
            </p>
          </div>

          <p className="mnote">
            Example: a 1% agreement. Each offering states its own percentage and terms.
          </p>
        </div>
      </div>
    </section>
  );
}
