import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Challans from "./components/Challans";
import Submissions from "./components/Submissions";
import Kyc from "./components/Kyc";
import Credibility from "./components/Credibility";
import Balance from "./components/Balance";
import CreateSubmission from "./components/Submissions/CreateSubmission";
import AdminReview from "./components/Admin/AdminReview";
import { AuthProvider } from "./components/Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/challans" Component={Challans} />
          <Route path="/submissions" Component={Submissions} />
          <Route path="/create-submission" Component={CreateSubmission} />
          <Route path="/kyc" Component={Kyc} />
          <Route path="/credibility" Component={Credibility} />
          <Route path="/balance" Component={Balance} />
          <Route path="/admin-review" Component={AdminReview} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
