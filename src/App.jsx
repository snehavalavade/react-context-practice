import Heading from "../src/components/Heading.jsx";
import Section from "../src/components/Section.jsx";

export default function ProfilePage() {
    return (
        <Section>
            <Heading>My Profile</Heading>
            <post title="Hello traveller!" body="Read about my adventures" />
            <AllPosts />
        </Section>
    );
}

function AllPosts() {
    return (
        <Section>
            <Heading>Posts</Heading>
            <RecentPosts />
        </Section>
    );
}

function RecentPosts() {
    return (
        <Section>
            <Heading>Recent Posts</Heading>
            <Post title="Flavours of lisbon" body="...those pasteis da nata!" />
            <Post title="Cricket match" body="I loved it!" />
        </Section>
    );
}

function Post({ title, body }) {
    return (
        <Section>
            <Heading>{title}</Heading>
            <p>
                <i>{body}</i>
            </p>
        </Section>
    );
}
