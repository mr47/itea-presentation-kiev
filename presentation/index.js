// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Deck,
    Fill,
    Fit,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Markdown,
    Quote,
    Slide,
    Spectacle,
    Text,
    S
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
    city: require("../assets/city.jpg"),
    city2: require("../assets/anders-lq.jpg"),
    logo: require("../assets/itea-logo.png"),
    mr47Logo: require("../assets/mr47.png"),
    iteaLogo: require("../assets/itea-logo.png"),
    github: require("../assets/mr47-github.png"),
    smash: require("../assets/building-up-tearing-down_500x400.png"),
    oneComponent: require("../assets/6e55696340d29634cae64f5c544e0e70.jpg"),
    reactNative: require("../assets/react-native-example.jpg"),
    nativeScript: require("../assets/cross-platform-rendering-angular.png"),
    uxGif: require("../assets/image_2928.gif"),
    raspberryPi: require("../assets/vooruit100_013_moneyshot_001-1.jpg"),
    gpio: require("../assets/gpio-screen.png"),
    speed0: require("../assets/speed-test-0.png"),
    speed1: require("../assets/speed-test-1.png"),
    flash: require("../assets/flash.jpg"),
    codebase: require("../assets/codebase.jpg"),
    // kiev
    turkishMan: require("../assets/gifit_1490222292602.gif"),
    dropdown: require("../assets/itea-dropdown-screen.png"),
    dropdown2: require("../assets/itea-dropdown-ng-if.png"),
    dropdown3: require("../assets/itea-dropdown.png"),
    batGif: require("../assets/gifit_1478297560929.gif"),
    asyncGif: require("../assets/gifit_1490222172226.gif"),
    angular2Hooks: require("../assets/angular-lifehooks.png"),
    angular2Production: require("../assets/giphy.gif"),
    sia: require("../assets/gifit_1478297669143.gif"),
    angularT: require("../assets/angular-typical.png")
};

preloader(images);

const theme = createTheme({
    primary: "#F2C031",
    secondary: "white",
    third: "#5b74f2"
}, {
    primary: "Helvetica",
    secondary: {name: "Droid Serif", googleFont: true, styles: ["400", "700i"]}
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={["zoom", "slide"]} transitionDuration={500}>
                    <Slide transition={["zoom"]} bgColor="primary">
                        <Heading size={1} fit caps lineHeight={1} textColor="black">
                            Angular 2
                        </Heading>
                        <Heading size={1} fit caps lineHeight={1}>
                            TypeScript
                        </Heading>
                        <Heading size={1} fit caps textColor="black">
                            <s>Пролемы</s> на больших проектах.
                        </Heading>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <Image src={images.iteaLogo.replace("/", "")} margin="0px auto 40px" height="300px"/>
                    </Slide>

                    <Slide transition={["slide"]}>
                        <Appear fid="1">
                            <Image src={images.mr47Logo.replace("/", "")} margin="0px auto 40px" height="300px"/>
                        </Appear>
                        <Appear fid="2">
                            <Heading size={1} fit caps lineHeight={1}>
                                Dmitry Poddubniy
                            </Heading>
                        </Appear>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <Layout style={{justifyContent: "center", alignItems: "center"}}>
                            <Fill>
                                <Image src={images.github.replace("/", "")} style={{width: "43vw"}}/>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide transition={["slide"]}>
                        <Heading size={1} fit caps lineHeight={1}>
                            <Text>1,097</Text> <span style={{color: "white"}}>contributions</span>
                        </Heading>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary"
                           notes="<ul><li>talk about that</li><li>and that</li></ul>">
                        <Heading size={1} fit caps lineHeight={1}>
                            React based presentation.
                        </Heading>
                        <CodePane
                            lang="jsx"
                            source={require("raw!../assets/deck.example")}
                            margin="20px auto"
                        />
                    </Slide>

                    <Slide transition={["slide"]} bgImage={images.city2.replace("/", "")} bgDarken={0.75}>
                        <Appear fid="1">
                            <Heading size={1} caps fit textColor="primary">
                                Как же мы решились на Angular 2
                            </Heading>
                        </Appear>
                        <Appear fid="2">
                            <Heading size={1} caps fit textColor="tertiary">
                                2K17
                            </Heading>
                        </Appear>
                        <Appear fid="3">
                            <Heading size={1} caps fit textColor="primary">
                                хотя есть react?
                            </Heading>
                        </Appear>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <BlockQuote>
                            <Quote>Реакт это jQuery 2007?</Quote>
                            <Cite>«и да и нет.»</Cite>
                        </BlockQuote>
                    </Slide>

                    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                        <Heading size={1} fit caps lineHeight={1} textColor="primary">
                            Что же дал jQuery, когда появился:
                        </Heading>
                        <List>
                            <Appear><ListItem>Удобство</ListItem></Appear>
                            <Appear><ListItem>Скорость разработки</ListItem></Appear>
                            <Appear><ListItem>Универсальность</ListItem></Appear>
                        </List>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary">
                        <Heading size={1} fit caps lineHeight={1}>
                            Магия, которая покорила нас:
                        </Heading>
                        <CodePane
                            lang="js"
                            source={require("raw!../assets/jquery.example")}
                            margin="20px auto"
                        />
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <BlockQuote>
                            <Quote>Angular 2, Поехали!</Quote>
                            <Cite>«Так говорил Гагарин, а его все любят правда?»</Cite>
/* TODO: Не смешно, придумать интереснее */
                        </BlockQuote>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="white">
                        <Image src={images.angular2Hooks.replace("/", "")} margin="0px auto 40px" height="400px"/>
                    </Slide>

                    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                        <List>
                            <Appear>
                                <Heading size={2} caps textColor="black">
                                    Angular 2:
                                </Heading>
                            </Appear>
                            <Appear>
                                <ListItem>Angular 1.x codebase</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Animations</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Universal</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Tests E2E</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Static Types</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>C# ==* TypeScript</ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <BlockQuote>
                            <Quote>Keep it simple, stupid</Quote>
                            <Cite>«делай это проще, дурачок»</Cite>
                        </BlockQuote>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <Image src={images.turkishMan.replace("/", "")} margin="0px auto 40px" height="400px"/>
                    </Slide>

                    <Slide transition={["slide"]} bgImage={images.codebase.replace("/", "")} bgDarken={0.75}>
                        <BlockQuote>
                            <Quote>Codebase that smells</Quote>
                            <Cite>«хорошая кодовая база»</Cite>
                        </BlockQuote>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="white">
                        <Image src={images.dropdown.replace("/", "")} margin="0px auto 40px" height="400px"/>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <BlockQuote>
                            <Quote>Вроде, обычный компонет!?</Quote>
                            <Cite>«а вот и нет»</Cite>
                        </BlockQuote>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="white">
                        <Image src={images.dropdown2.replace("/", "")} margin="0px auto 40px" height="400px"/>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="white">
                        <Image src={images.dropdown3.replace("/", "")} margin="0px auto 40px" height="200px"/>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="white">
                        <Image src={images.smash.replace("/", "")} margin="0px auto 40px" height="400px"/>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary">
                        <Heading size={1} fit caps lineHeight={1}>
                            Еще типичная проблема?
                        </Heading>
                        <CodePane
                            lang="js"
                            source={require("raw!../assets/angular1-bad.example")}
                            margin="20px auto"
                        />
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <Image src={images.batGif.replace("/", "")} margin="0px auto 40px" height="400px"/>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="white">
                        <Heading size={1} fit caps lineHeight={1}>
                            Еще типичная проблема?
                        </Heading>
                        <CodePane
                            lang="js"
                            source={require("raw!../assets/angular1-production-ready.example")}
                            margin="20px auto"
                        />
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <BlockQuote>
                            <Quote>One component to rule them all!</Quote>
                            <Cite>«Один компонент, чтобы править ими всеми!»</Cite>
                        </BlockQuote>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="white">
                        <Image src={images.oneComponent.replace("/", "")} margin="0px auto 40px" height="400px"/>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <BlockQuote>
                            <Quote>Так ли просто на Angular 2</Quote>
                            <Cite>« - нет.»</Cite>
                        </BlockQuote>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary">
                        <Heading size={1} fit caps lineHeight={1}>
                            Не в redux'е дело!
                        </Heading>
                        <CodePane
                            lang="js"
                            source={require("raw!../assets/angular2.example")}
                            margin="20px auto"
                        />
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="white">
                        <CodePane
                            lang="js"
                            source={require("raw!../assets/typescript-bad-ass.example")}
                            margin="20px auto"
                        />
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="white">
                        <CodePane
                            lang="js"
                            source={require("raw!../assets/angular2-bad-ass-2.example")}
                            margin="20px auto"
                        />
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="white">
                        <CodePane
                            lang="js"
                            source={require("raw!../assets/angular2-good.example")}
                            margin="20px auto"
                        />
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="white">
                        <CodePane
                            lang="js"
                            source={require("raw!../assets/angular2-good2.example")}
                            margin="20px auto"
                        />
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <BlockQuote>
                            <Quote>Как выглядит </Quote>
                            <Cite>разработка на Angular 2?</Cite>
                        </BlockQuote>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <Image src={images.asyncGif.replace("/", "")} margin="0px auto 40px" height="400px"/>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="white">
                        <CodePane
                            lang="js"
                            source={require("raw!../assets/angular2.example")}
                            margin="20px auto"
                        />
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="white">
                        <CodePane
                            lang="js"
                            source={require("raw!../assets/angular2-dirty.example")}
                            margin="20px auto"
                        />
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <BlockQuote>
                            <Quote>UI/UX become more and more important</Quote>
                            <Cite>«UI / UX становятся все более и более важным»</Cite>
                        </BlockQuote>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="white">
                        <Image src={images.uxGif.replace("/", "")} margin="0px auto 40px" height="400px"/>
                    </Slide>

                    <Slide transition={["slide"]} bgImage={images.flash.replace("/", "")} bgDarken={0.75}>
                        <BlockQuote>
                            <Quote>I am the fastest man alive.</Quote>
                            <Cite>«The Flash»</Cite>
                        </BlockQuote>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <Image src={images.speed0.replace("/", "")} width="100%"/>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <Image src={images.speed1.replace("/", "")} height="500px"/>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading caps fit size={1} textColor="white">
                            NativeScript
                        </Heading>
                        <Heading caps fit size={1} textColor="black">
                            React Native
                        </Heading>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <Image src={images.nativeScript.replace("/", "")} height="500px"/>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <Image src={images.reactNative.replace("/", "")} height="500px"/>
                    </Slide>

                    <Slide transition={["slide"]} bgImage={images.city2.replace("/", "")} bgDarken={0.75}>
                        <BlockQuote>
                            <Quote>Any sufficiently advanced technology is indistinguishable from magic.</Quote>
                            <Cite>«Современные техноглогии похожи на магию.»</Cite>
                        </BlockQuote>
                    </Slide>

                    <Slide transition={["slide","fade"]} bgColor="secondary" textColor="primary">
                        <List>
                            <Appear><ListItem>Следите за трендами, а не следуйте</ListItem></Appear>
                            <Appear><ListItem>Изучайте больше</ListItem></Appear>
                            <Appear><ListItem>Отдыхайте</ListItem></Appear>
                            <Appear><ListItem>Курсы - хороший способ начать</ListItem></Appear>
                            <Appear><ListItem>KISS</ListItem></Appear>
                        </List>
                    </Slide>

                    <Slide transition={["slide"]} bgImage={images.angularT.replace("/", "")} bgDarken={0.75}>
                        <BlockQuote>
                            <Quote>Как выглядит типичный проект</Quote>
                            <Cite>на angular 2, конечно!</Cite>
                        </BlockQuote>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <Image src={images.angular2Production.replace("/", "")} margin="0px auto 40px" height="400px"/>
                    </Slide>

                    <Slide transition={["zoom", "slide"]} bgColor="black">
                        <Link href="http://itea.ua"><Image width="100%" src={images.iteaLogo}/></Link>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <List>
                            <ListItem>
                                <Link href="https://github.com/mr47/itea-presentation-kiev">Presentation on Github</Link>
                                <p>https://github.com/mr47/itea-presentation-kiev</p>
                            </ListItem>
                            <ListItem>
                                <Link href="https://github.com/mr47">Github @ mr47</Link>
                                <p>https://github.com/mr47</p>
                            </ListItem>
                        </List>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <Heading size={1} fit caps lineHeight={1}>
                            Увидимся в будущем!
                        </Heading>
                        <Image src={images.sia.replace("/", "")} margin="0px auto 40px" height="400px"/>
                    </Slide>

                </Deck>
            </Spectacle>
        );
    }
}
