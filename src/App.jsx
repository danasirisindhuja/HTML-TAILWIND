// ================= TASK 1 =================
function Task1() {
  return (
    <div>
      <h1>Task 1 - Student Profile</h1>
      <p>Student Profile code will come here</p>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white w-96 rounded-2xl shadow-lg overflow-hidden text-center">

        {/* Profile Image */}
        <img
          src="https://easydrawingguides.com/wp-content/uploads/2024/06/how-to-draw-spider-gwen-gwen-stacy-featured-image-1200.png"
          alt="Gwen"
          className="w-full h-40 object-contain"
        />

        {/* Content */}
        <div className="px-7 pb-7">

          <h1 className="text-2xl font-bold underline text-gray-800">
            Gwen
          </h1>

          <h2 className="text-lg font-semibold text-pink-600 mt-4">
            B.Tech - Computer Science and Information Technology
          </h2>

          <p className="text-blue-600 text-lg leading-7 mt-5">
            A passionate computer science student
            interested in web development, programming,
            and technology.
          </p>

          <button className="mt-6 bg-purple-600 text-white px-7 py-3 rounded-lg text-lg underline hover:bg-purple-700">
            View Profile
          </button>

        </div>

      </div>

    </div>
     </div>
  );
}

// ================= TASK 2 =================

function Task2() {

  const images = [
    "https://i.pinimg.com/736x/7a/9b/c2/7a9bc268e3d8132493a76fc04dd75fd2.jpg",
    "https://i.pinimg.com/736x/3c/dd/4c/3cdd4c16e53d3816dcaa8c6566090b05.jpg",
    "https://i.pinimg.com/736x/86/42/78/8642784636f8c9f964b6bc1cfd60456d.jpg",
   "https://i.pinimg.com/736x/ce/40/04/ce4004c51984f4911160becccb809d65.jpg",
   "https://i.pinimg.com/736x/fb/94/3d/fb943d770dde03de2c6605746258975e.jpg",
   "https://i.pinimg.com/736x/73/9c/fe/739cfe7b8c3ce8dca836fb422963f177.jpg",
   "https://i.pinimg.com/736x/06/4c/8b/064c8b8bfd8cd8325c34e5ef14c8bc59.jpg",
   "https://i.pinimg.com/736x/2c/fd/78/2cfd781446885ceab9cb0b3e6f0dbb7b.jpg",
  ];

  return (
    <div>
       <h1>Task 2 - Image Gallery</h1>
      <p>Image Gallery code will come here</p>
    <div className="min-h-screen bg-gray-100 py-10">

      <h1 className="text-3xl font-bold underline text-center text-red-800 mb-8">
        Image Gallery
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-4 px-6">

        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}

      </div>

    </div>
    </div>
  );
}

// ================= TASK 3 =================
function Task3() {
  return (
    <div><h1>Task 3 - Pricing Plans</h1>
      <p>Pricing Plans code will come here</p>
    <div className="min-h-screen bg-gray-100 py-10">

      <h1 className="text-3xl font-bold underline text-center text-gray-800 mb-10">
        Pricing Plans
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6 px-6">

        {/* Basic */}
        <div className="bg-white border-4 border-red-300 rounded-xl p-8 text-center shadow-md">

          <h2 className="text-xl font-bold underline">
            Basic
          </h2>

          <p className="text-3xl font-bold text-blue-600 mt-6">
            $9<span className="text-base">/month</span>
          </p>

          <div className="text-gray-600 mt-6 space-y-3">
            <p>✓ 5 Projects</p>
            <p>✓ Basic Support</p>
            <p>✓ 5 GB Storage</p>
          </div>

          <button className="mt-8 bg-red-600 text-white px-6 py-3 rounded-lg">
            Choose Plan
          </button>

        </div>


        {/* Standard */}
        <div className="bg-purple-600 text-white rounded-xl p-8 text-center shadow-xl">

          <h2 className="text-xl font-bold underline">
            Standard
          </h2>

          <p className="text-3xl font-bold mt-6">
            $19<span className="text-base">/month</span>
          </p>

          <div className="mt-6 space-y-3">
            <p>✓ 15 Projects</p>
            <p>✓ Priority Support</p>
            <p>✓ 50 GB Storage</p>
          </div>

          <button className="mt-8 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold">
            Choose Plan
          </button>

        </div>


        {/* Premium */}
        <div className="bg-white border-4 border-red-300 rounded-xl p-8 text-center shadow-md">

          <h2 className="text-xl font-bold underline">
            Premium
          </h2>

          <p className="text-3xl font-bold text-blue-600 mt-6">
            $29<span className="text-base">/month</span>
          </p>

          <div className="text-gray-600 mt-6 space-y-3">
            <p>✓ Unlimited Projects</p>
            <p>✓ 24/7 Support</p>
            <p>✓ 100 GB Storage</p>
          </div>

          <button className="mt-8 bg-red-600 text-white px-6 py-3 rounded-lg">
            Choose Plan
          </button>

        </div>

      </div>

    </div>
     </div>
  );
}

function App() {
  return (
    <div>
      <Task1 />
      <Task2 />
      <Task3 />
      
    </div>
  );
}
export default App;