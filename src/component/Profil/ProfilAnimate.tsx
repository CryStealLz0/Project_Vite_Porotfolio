import '../../style/Navbar/profilAnimate.scss';

function ProfilAnimate() {
  return (
    <>
      <div className="container-animate">
        <div className="container-profil">
          <div className=" profil">
            <img src="./src/assets/img/indra.jpg" alt="profil" />
          </div>
        </div>
        <div className="text-profil">
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            inventore sequi totam qui doloremque temporibus tempore cumque autem
            blanditiis sit nihil, vitae consequuntur. Soluta tempora corporis
            sed, deserunt eveniet nam.
          </p>

          <p className="name">Dimas Indra Jaya</p>
          <p className="job">Full Stack Developer</p>
        </div>
      </div>
    </>
  );
}

export default ProfilAnimate;
