import { getCommunities } from "@/database/queries";
import Link from "next/link";

export default async function CommunityBoard() {

    const communities = await getCommunities();

    return (
        <div>
            <p className="text-4xl font-bold mb-8 mt-8 text-center">
                Community Board
            </p>
            <div className="grid grid-cols-4 gap-4 m-4">
                {communities.map((community) => {
                    return (
                        <Link key={community.id} href={`/community/${community.id}`} className="font-bold text-lg block max-w-sm p-6 bg-white border rounded-lg shadow border-gray-700 hover:bg-blue-600">
                            <p>
                                {community.name}
                            </p>
                        </Link>
                    );
                })}
                <Link href={"/create-community"} className="font-bold text-lg block max-w-sm p-6 bg-gray-400 rounded-lg shadow hover:bg-blue-600">
                    <p>
                        CREATE NEW COMMUNITY
                    </p>
                </Link>
            </div>
        </div>
    );
}