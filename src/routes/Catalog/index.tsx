import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import './styles.css'
export default function Catalog() {
    return (
        <>
            <Header />
            <main className="ct-catalog-main">
                <section id="ct-catalog-section">
                    <div className="ct-search-bar-container">
                    </div>
                    <div className="ct-catalog-cards-container">
                        <SearchBar />
                    </div>
                </section>

            </main>
        </>
    );
}