import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from '../presentation/Home.jsx';
import { Layout } from '../presentation/Layout.jsx';
import { Favourites } from '../presentation/Favourites.jsx';
import { CardPreview } from '../components/CardPreview/CardPreview.jsx';




export default function App () {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/:id" element={<CardPreview />} />
            <Route path="favourites" element={<Favourites />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


