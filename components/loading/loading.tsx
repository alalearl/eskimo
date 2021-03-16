import Loader from 'react-loader-spinner';

export default function Loading() {
  return (
    <div className="left-0 top-0 bg-opacity-50 flex justify-center items-center absolute w-screen h-screen bg-black">
      <div className="" >
        <Loader type="Circles" color="#00BFFF" height={80} width={80}/>
      </div>
    </div>
  )
}