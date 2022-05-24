import React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { setModal } from "ducks/actions";
import { allCategories } from "components/filter/tags";
import { Routes, Route } from "react-router-dom";
import {
  Banner,
  Header,
  Footer,
  Title,
  DonateModal,
  DonateSuccessModal,
} from "..";
import {
  HomePage,
  CategoryPage,
  AboutPage,
  ProjectPage,
} from "components/pages";
import { StateType } from "ducks/types";
import styles from "./app.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const App: React.FC<StateProps & DispatchProps> = ({ modal, setModal }) => {
  return (
    <>
      {modal && (
        <div className={styles.modalWrapper} onClick={() => setModal(null)} />
      )}
      <DonateModal />
      <DonateSuccessModal />
      <div className={cn(styles.wrapper, { [styles.noScroll]: modal })}>
        <Header />
        <Banner />
        <Title />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {allCategories.map((category) => (
            <React.Fragment key={category}>
              <Route
                path={`/${category}`}
                element={<CategoryPage type={category} />}
              ></Route>
              <Route
                path={`${category}/:projectId`}
                element={<ProjectPage type={category} />}
              />
            </React.Fragment>
          ))}
          <Route path="*" element={<></>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

const MSTP = ({ modal }: StateType) => ({ modal });

const MDTP = { setModal };

export default connect(MSTP, MDTP)(App);
