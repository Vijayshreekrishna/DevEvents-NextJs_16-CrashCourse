import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import { IEvent } from "@/database";
import { cacheLife } from "next/cache";
import { headers } from "next/headers";

const Page = async () => {
    'use cache';
    cacheLife("hours");

    // Build absolute URL for SSR and Vercel
    const host = headers().get("x-forwarded-host") || "localhost:3000";
    const protocol = headers().get("x-forwarded-proto") || "http";
    const baseUrl = `${protocol}://${host}`;

    const response = await fetch(`${baseUrl}/api/events`, {
        cache: "no-store"
    });

    const { events } = await response.json();

    return (
        <section>
            <h1 className="text-center">The Hub For EveryDev <br/> Event You Can't Miss</h1>
            <p className="text-center mt-5">Hackathons, Meetups and Conferences. All in one place</p>

            <ExploreBtn />
            <div className="mt-20 space-y-7">
                <h3>Featured Events</h3>

                <ul className="events">
                    {events?.length > 0 && events.map((event: IEvent) => (
                        <li key={event.title} className="list-none">
                            <EventCard {...event} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Page;
