import Card from '../../components/Card';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import './styles.css'
export default function Catalog() {
    return (
        <>
            <Header />
            <main className="ct-catalog-main">
                <section id="ct-catalog-section" className="ct-container">
                    <div className="ct-search-bar-container">
                        <SearchBar />
                    </div>

                    <div className='ct-catalog-cards-container'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />

                    </div>
                </section>

            </main>
        </>
    );
}