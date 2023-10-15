import ProfilAnimate from './ProfilAnimate';

function ProfilWelcome() {
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col justify-center px-40">
        <div className="h-auto w-4/6 bg-[#272932]">
          <div className="flex w-full h-full relative">
            <div className="w-[50%] m-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              qui aliquid magni iure quos placeat cum reprehenderit ad cumque
              ipsa deserunt. Minus voluptas necessitatibus ut hic quae possimus
              ullam amet commodi dolor, itaque vel iusto rem voluptatem neque
              repellat nemo sapiente, est cumque iste sunt blanditiis. Eligendi
              voluptatem vel quam?
            </div>
          </div>
        </div>
        <div className="h-28 w-5/6 relative">
          <ProfilAnimate></ProfilAnimate>
        </div>
      </div>
    </>
  );
}

export default ProfilWelcome;
