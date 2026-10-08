
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getSession } from "@/lib/authentication";


export default async function HomePage() {
  const session = await getSession();

  return (
    <div>

      <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] bg-green-100">
        <h1 className="text-6xl font-bold text-center">AI agent</h1>
        <p className="text-2xl text-center">This AI agent can give you fun facts of your choice.</p>
        <div className="mt-2.5">
          <Link href={session ? "/assistant" : "/login"}>
            <Button variant="default" className="px-8 py-5 text-lg cursor-pointer bg-green-600">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
