import { Puff } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="absolute w-full h-full flex items-center justify-center">

        <Puff
          height="100"
          width="100"
          radius={1}
          color="#34dbeb"
          ariaLabel="loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
    </div>
  );
};

export default Loader;
