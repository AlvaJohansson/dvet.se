import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import text from "../../../content/home-page.md";
import InfoButton from "./widgets/info-button.jsx";
import KickoffInfoButton from "./widgets/kickoff-info-button";
import NewsFeed from "./widgets/newsfeed";
import Schedule from "./widgets/schedule";
import { isReception } from "../util";

const me = () => (
    <div className="page">
        <ReactMarkdown children={text} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}></ReactMarkdown>
        <KickoffInfoButton />
        {!isReception()
            ?
            <>
                <h2>Events</h2>
                <Schedule eventUrl="/getEvents" restUrl="/schedule" />
            </>
            : <></>}

        <NewsFeed />
        {/* <div className="info-buttons-list">
            <h1>Helpful tools </h1>
            <div>
                <InfoButton name="Food" image="https://placebear.com/g/200/200" uri="https://placebear.com/g/200/200" />
                <InfoButton name="Maps" image="https://placebear.com/g/200/200" uri="https://placebear.com/g/200/200" />
                <InfoButton name="Schema" image="https://placebear.com/g/200/200" uri="https://cloud.timeedit.net/chalmers/web/public/ri1X5016Z7009vQQ4fZ5760Y05yY5Y87QQ.html" />
                <InfoButton name="MonNet" image="https://placebear.com/g/200/200" uri="https://megaman.monaden/" />
                <InfoButton name="Lights" image="https://placebear.com/g/200/200" uri="http://192.168.1.247:8080/" />
                <InfoButton name="" image="https://placebear.com/g/200/200" uri="https://placebear.com/g/200/200" />
            </div>
        </div> */}
    </div>
);

export default me;
