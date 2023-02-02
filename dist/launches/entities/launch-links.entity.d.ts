import { LaunchLinksFlickr } from './launch-links-flickr.entity';
import { LaunchLinksPatch } from './launch-links-patch.entity';
import { LaunchLinksReddit } from './launch-links-reddit.entity';
export declare class LaunchLinks {
    patch?: LaunchLinksPatch;
    reddit?: LaunchLinksReddit;
    flickr?: LaunchLinksFlickr;
    presskit?: string;
    webcast?: string;
    youtubeId?: string;
    article?: string;
    wikipedia?: string;
}
