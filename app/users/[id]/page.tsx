type props = {
    params: {id : string;};
};

export default function User({params}: props) {
    return (
    <div className="bg-slate-200 text-black font-semibold text-[24px] text-[24px] text-center uppercase min-h-screen flex items-center justify-center">
      User Page {params.id}
    </div>
  );
}