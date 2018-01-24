import {storiesOf} from '@storybook/angular';
import {HeadComponent} from '../src/app/head/head.component';
import {HeaderComponent} from '../src/app/header/header.component';
import {TitleBarComponent} from '../src/framework/title-bar/title-bar.component';
import {ContentComponent} from '../src/framework/content/content.component';

storiesOf('My Button', module)
.add('Font Test',()=>({
    component: ContentComponent
}))
.add('with some emoji', () => ({
    component: HeadComponent,
    props: {
        text: '😀 😎 👍 💯'
    }
})).add('with some emoji and action', () => ({
    component: HeaderComponent,
}));

storiesOf('TCIG Travel Framework', module)
.add('Title Bar', () => ({
    component: TitleBarComponent}));