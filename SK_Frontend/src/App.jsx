import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentProfileDetails from "./pages/Manage_students/Showing_students/Student_profile_details";

import Sidebar from "./components/Sidebar"; 
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminWalletApproval from "./pages/Dashboard/Wallet";

import StudentAdmissionList from "./pages/Manage_students/Showing_students/Manage_student";
import EnquiryForm from "./pages/Enquiry/EnquiryForm";
import StudentFeeDetails from "./pages/Manage_students/StudentFeeDetails";

import CertificateManagement from "./pages/Certificate/Certificate";

import EnquiryList from "./pages/Enquiry/EnquiryList";

import NotesDashboard from "./pages/Notes/NotesDashboard";
import AddNote from "./pages/Notes/AddNote";
import NoteDetail from "./pages/Notes/NoteDetail";

import CourseList from "./pages/Courses/CourseList";
import CourseForm from "./pages/Courses/CourseForm";
import CourseUpdateForm from "./pages/Courses/UpdateCourse";

import { StudentProvider } from "./context/StudentContext";
import MarqueeManager from "./pages/Marqueline";

const App = () => {
  return (
    <StudentProvider>
      <div className="h-screen flex flex-col">

        {/* Main Content */}
        <div className="flex flex-1">

          <Sidebar />
 
          {/* Content Area */}
          <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} /> 
              <Route path="/admin-wallet" element={<AdminWalletApproval />} />

              <Route path="/enquiry" element={<EnquiryForm />} />
              <Route path="/fees" element={<StudentFeeDetails />} />
              <Route path="/Student_list" element={<StudentAdmissionList />} />
              <Route path="/edit-student/:id" element={<StudentProfileDetails />} />
             

              <Route path="/apply-certificate" element={<CertificateManagement />} />

              <Route path="/enquiry-list" element={<EnquiryList />} />

              <Route path="/marqueeline" element={<MarqueeManager />} />              

              <Route path="/Notes" element={<NotesDashboard />} />
              <Route path="/AddNote" element={<AddNote />} />
              <Route path="/NoteDetail" element={<NoteDetail />} />
              
              <Route path="/Courses" element={<CourseList />} />
              <Route path="/CourseForm" element={<CourseForm />} />
              <Route path="/updatecourse" element={<CourseUpdateForm />} />
              
          
              {/* <Route path="/studentAddAdmission" element={<AddNewStudent />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </StudentProvider>
  );
};

export default App;
