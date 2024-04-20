import Form from "@/app/create-workout/form";
import CommunityDropDown from "@/app/create-workout/communitydropdown";
import NavBar from "../components/navbar";

export default function Page() {
    return (
        <Form>
            <CommunityDropDown />
            <NavBar />
        </Form>
    );
}