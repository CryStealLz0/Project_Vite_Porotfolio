import '../../style/Sertificate/sertificate.scss';

function Sertificate() {
  return (
    <>
      <div>
        <div className="container-section" id="sertificate">
          <div className="heading">
            <h1>Sertificate</h1>
          </div>
          <div className="content-sertificate">
            <div className="sertificate-content">
              <div className="container-sertif">
                <div className="sertif-img"></div>
                <div className="sertif-des"></div>
              </div>
              <div className="container-choice">
                <div className="choice-des">
                  <div className="choice-buttons"></div>
                </div>
                <div className="choice">
                  <div className="choice-isi"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sertificate;
