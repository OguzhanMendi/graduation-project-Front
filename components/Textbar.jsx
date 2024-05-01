export default function Textbar() {
  return (
    <>
      <div className="flex w-full justify-center gap-10 p-2">
        <span className="text-3xl font-bold bg-yellow-300 px-10 py-3 rounded-2xl hover:bg-yellow-400 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
          Popüler Ürünler
        </span>
        <span className="text-3xl font-bold bg-red-600 px-10 py-3 rounded-2xl hover:bg-red-700 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
          Flaş İndirimler
        </span>
        <span className="text-3xl font-bold bg-green-600 px-10 py-3 rounded-2xl hover:bg-green-700 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
          Haftanın En İyileri
        </span>
      </div>
    </>
  );
}
