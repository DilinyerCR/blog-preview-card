import article from "/assets/images/illustration-article.svg"
import avatar from "/assets/images/image-avatar.webp"

const App = () => {
  return (
    <div className="mx-auto my-150 p-24 w-325 h-480 bg-White outline outline-1 outline-Gray-950 rounded-16 shadow-custom-shadow">

      <div>
        <img src={article} alt="" className="rounded-16"/>
      </div>

      <div className="my-20">
        <p className="w-75 h-25 bg-Yellow flex justify-center items-center text-10 font-extrabold rounded-5 text-Gray-950">Learning</p>
        
        <p className="my-15 text-12 text-Gray-950">Published 21 Dec 2023</p>
        
        <h1 className="my-15 text-20 font-bold hover:text-Yellow hover:cursor-pointer text-Gray-950">HTML & CSS foundations</h1>
        
        <p className="text-13 text-Gray-500">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        
        <div className="mt-25 flex">
          <img src={avatar} alt="" className="w-38"/>
          <p className="ml-15 flex justify-center items-center font-bold text-14 text-Gray-950">Greg Hooper</p>
        </div>
        
      </div>


    </div>
  );
}

export default App
