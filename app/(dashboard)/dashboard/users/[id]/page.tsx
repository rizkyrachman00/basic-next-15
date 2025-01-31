const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <>
      <div className="text-3xl">
        users detail Page
        <p>user profile {id}</p>
      </div>
    </>
  );
};

export default Page;
