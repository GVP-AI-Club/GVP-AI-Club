const cheerio = require('cheerio');
const axios = require('axios');

(async () => {
    const events_url = 'https://gdsc.community.dev/gayatri-vidya-parishad-college-of-engineering-visakhapatnam/';
    try {
        const { data, status } = await axios.get(events_url)
        if (status === 200) {
            const html = data;
            const $ = cheerio.load(html);
            const images = $('.event-image').get().map(el => el.attribs.src);
            // console.log('imgs', images);
            const extractInnerHTML = el => el.children[0].data.trim();
            const types = $('.vertical-box--event-type').get().map(extractInnerHTML);
            console.log('types', types);
            const titles = $('.vertical-box--event-title').get().map(extractInnerHTML);
            console.log('titles', titles);
            const dates = $('.vertical-box--event-date').get().map(extractInnerHTML);
            console.log('dates', dates);
            const urls = $('a.vertical-box-container').get().map(el => el.attribs.href.trim());
            console.log('urls', urls);
            const rawData = {images, types, titles, dates, urls};
            console.log('aoa', rawData);
            
            const events = [];
            for(let i in rawData.images) {
                events.push({
                    image: rawData.images[i],
                    type: rawData.types[i],
                    title: rawData.titles[i],
                    date: rawData.dates[i],
                    url: rawData.urls[i],
                })
            }
            res.status(200).json({ name: 'John Doe', events })
        }
    } catch (error) {
        console.error('Error', error);
    }
})()