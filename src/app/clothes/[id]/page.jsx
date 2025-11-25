import AddToCartButton from "@/components/AddToCartButton/AddToCartButton";

export default async function Page({ params }) {
  const { id } = await params;

  const res = await fetch(`https://cloth-mania-server.vercel.app/clothes/${id}`);
  const cloth = await res.json();

  return (
    <div className="container mx-auto py-10 px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={cloth.image}
            alt={cloth.name}
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">{cloth.name}</h1>
          <p className="text-2xl font-semibold text-green-600">${cloth.price}</p>
          <p className="text-gray-700">{cloth.description}</p>

          {/* Category */}
          <p className="text-sm text-gray-500">Category: {cloth.category}</p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <AddToCartButton cloth={cloth} />
            <button className="cursor-pointer border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
