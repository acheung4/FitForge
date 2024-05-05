import { getCommunities } from "@/database/queries";

export default async function CommunityDropDown() {
    const communities = await getCommunities();

    return (
        <div className='flex flex-wrap -mx-3 mb-6'>
            <div className="w-full px-3">
                <label htmlFor="community" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">ENTER COMMUNITY: </label>
                <select id='community' name='community' defaultValue='' required className="appearance-none block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline">
                    <option value='' disabled>
                        Select community
                    </option>
                    <option key={0} value={0}>
                        (none)
                    </option>
                    {communities.map((community) => {
                        return <option key={community.id} value={community.id}>{community.name}</option>
                    })}
                </select>
            </div>
        </div>
    );
}