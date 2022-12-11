import './footer.css';
import { NullableElement } from '../../../types/types';
import createElem from '../../../utils/utils';

import githubImage from '../../../assets/github.svg';
import rsImage from '../../../assets/rs-school.svg';

export default class Footer {
    footerEl: NullableElement<HTMLElement>;

    constructor() {
        this.footerEl = document.querySelector('footer');
    }

    private createRSLink() {
        const rsLink = createElem('a');
        rsLink.setAttribute('href', 'https://rs.school');
        const rsImg = createElem('img');
        rsImg.setAttribute('src', rsImage);
        rsImg.setAttribute('alt', 'RS School');
        rsLink.append(rsImg);
        return rsLink;
    }

    private createGithubLink() {
        const github = createElem('a', 'github-link', 'Ponomareva-Nina');
        github.setAttribute('href', 'https://github.com/Ponomareva-Nina');
        const githubImg = createElem('img');
        githubImg.setAttribute('src', githubImage);
        githubImg.setAttribute('alt', 'Github:');
        github.prepend(githubImg);
        return github;
    }

    public createFooter() {
        const rsLogo = this.createRSLink();
        const githubLink = this.createGithubLink();
        if (this.footerEl) {
            this.footerEl.prepend(rsLogo);
            this.footerEl.append(githubLink);
        }
    }
}
