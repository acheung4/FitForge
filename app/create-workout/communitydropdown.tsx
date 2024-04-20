import { getCommunities } from "@/database/queries";

export default async function CommunityDropDown() {
    const communities = await getCommunities();

    return (
        <div className='mb-4'>
            <label htmlFor="community">Would you like to share to any community? </label>
            <select id='community' name='community' defaultValue='' required>
                <option value='' disabled>
                    Choose community. Select none if N/A
                </option>
                <option key={0} value={0}>
                    None
                </option>
                {communities.map((community) => {
                    return <option key={community.id} value={community.id}>{community.name}</option>
                })}
            </select>
        </div>
    );
}