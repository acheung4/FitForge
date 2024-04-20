import { getCommunities } from "@/database/queries";

export default async function CommunityDropDown() {
    const communities = await getCommunities();

    return (
        <div className='mb-4'>
            <label htmlFor="community">ENTER COMMUNITY: </label>
            <select id='community' name='community' defaultValue='' required>
                <option value='' disabled>
                    Select none if do not want to share
                </option>
                <option key={0} value={0}>
                    none
                </option>
                {communities.map((community) => {
                    return <option key={community.id} value={community.id}>{community.name}</option>
                })}
            </select>
        </div>
    );
}