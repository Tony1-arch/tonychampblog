import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";


export const client  = sanityClient({
projectId:process.env.REACT_APP_PROJECT_ID ,
dataset:"production",
appVersion:"2023-7-11",
token:process.env.REACT_APP_PROJECT_TOKEN,
useCdn:true,
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) =>{
    return builder.image(source)
}