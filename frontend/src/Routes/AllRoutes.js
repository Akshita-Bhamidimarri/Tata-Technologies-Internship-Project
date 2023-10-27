import { Routes, Route } from "react-router-dom";
import { HomePage, Contact, CreateIncident, PageNotFound, ViewIncident, ExportToExcel, UploadIncidents} from "../pages/index";

export const AllRoutes = () => {
  return (
        <Routes>
            <Route path="/" element = { <HomePage /> }></Route>
            <Route path="/createIncident" element = { <CreateIncident /> }></Route>
            <Route path="/viewIncident" element = { <ViewIncident /> }></Route>
            <Route path="/Contact" element = { <Contact /> }></Route>
            <Route path="/ExportToExcel" element = { <ExportToExcel /> }></Route>
            <Route path="/uploadIncidents" element = { <UploadIncidents /> }></Route>
            <Route path="*" element = { <PageNotFound /> }></Route>
        </Routes>
  )
}
