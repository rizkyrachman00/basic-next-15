import Hello from "@/components/hello";

export default function Home() {
  console.log("Apakah saya server komponen / client komponen");

  return (
    <div>
      <h1 className="text-3xl">Selamat Datang Di Aplikasi Ini 😅</h1>
      <Hello />
    </div>
  );
}
