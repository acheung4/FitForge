import { getCommunities } from "@/database/queries";

export default async function CommunityBoard() {
    
    const communities = await getCommunities();
    
    return (
        communities.map((community) => {
            return (
                <div>
                    <h2>{community.name}</h2>
                </div>
            )
        })
    );
}


//This lists all communities that have been created.