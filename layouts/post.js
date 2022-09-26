import Footer from "components/footer";
import Default from "layouts/default";
import Author from 'components/author';

export default function Post(props) {
    return <>
        <Default {...props}>
            {props.children}
            <div className='flex items-center justify-center mb-12'>
                <Author />
            </div>
        </Default>
        <Footer />
    </>;
}