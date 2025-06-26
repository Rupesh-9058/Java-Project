import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import "./index.css";

import ProtectedRoute from "./privaterouting/ProtectedRoute";

import Roadmap from "./pages/Roadmap";
import SignUp from "./pages/user/SignUp";
import SignIn from "./pages/user/SignIn";
import AdminSignUp from "./pages/admin/AdminSignUp";
import AdminSignIn from "./pages/admin/AdminSignIn";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import ContactMessage from "./components/admindashboardpages/ContactMessage";
import UserCards from "./components/admindashboardpages/UserCards";
import Dashboard from "./components/dashboard/dashboard";
import Introduction from "./components/dashboardpages/introduction/Introduction";
import Installations from "./components/dashboardpages/installation/Installations";
import Identifier from "./components/dashboardpages/identifier/Identifier";
import DataType from "./components/dashboardpages/datatype/DataType";
import TypeCasting from "./components/dashboardpages/typecasting/TypeCasting";
import Variables from "./components/dashboardpages/variables/Variables";
import Operators from "./components/dashboardpages/operators/Operators";
import FlowControl from "./components/dashboardpages/flowcontrol/FlowControl";
import Class from "./components/dashboardpages/oopsconcept/Class";
import Methods from "./components/dashboardpages/oopsconcept/Methods";
import Featuresofmethod from "./components/dashboardpages/oopsconcept/Featuresofmethod";
import Inheritance from "./components/dashboardpages/oopsconcept/Inheritance";
import MethodOverloading from "./components/dashboardpages/oopsconcept/MethodOverloading";
import MethodOverriding from "./components/dashboardpages/oopsconcept/MethodOverriding";
import Modifiers from "./components/dashboardpages/oopsconcept/Modifiers";
import Constructors from "./components/dashboardpages/oopsconcept/Constructors";
import Interface from "./components/dashboardpages/oopsconcept/Interface";
import Blocks from "./components/dashboardpages/oopsconcept/Blocks";
import ObjectTypeCasting from "./components/dashboardpages/oopsconcept/ObjectTypeCasting";
import FactoryMethod from "./components/dashboardpages/oopsconcept/FactoryMethod";
import SingletonClasss from "./components/dashboardpages/oopsconcept/SingletonClasss";
import DataHiding from "./components/dashboardpages/oopsconcept/DataHiding";
import Abstraction from "./components/dashboardpages/oopsconcept/Abstraction";
import Encapsulation from "./components/dashboardpages/oopsconcept/Encapsulation";
import Polymorphism from "./components/dashboardpages/oopsconcept/Polymorphism";
import ObjectClass from "./components/dashboardpages/java.langPackage/ObjectClass";
import ObjectClassMethod from "./components/dashboardpages/java.langPackage/ObjectClassMethod";
import StringClass from "./components/dashboardpages/java.langPackage/StringClass";
import StringMethods from "./components/dashboardpages/java.langPackage/StringMethods";
import StringBuffer from "./components/dashboardpages/java.langPackage/StringBuffer";
import StringBufferMethods from "./components/dashboardpages/java.langPackage/StringBufferMethods";
import WrapperClass from "./components/dashboardpages/java.langPackage/WrapperClass";
import WrapperConstructors from "./components/dashboardpages/java.langPackage/WrapperConstructors";
import WrapperMethods from "./components/dashboardpages/java.langPackage/WrapperMethods";
import AutoboxingUnboxing from "./components/dashboardpages/java.langPackage/AutoboxingUnboxing";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/roadmap",
          element: (
            <ProtectedRoute>
              <Roadmap />
            </ProtectedRoute>
          ),
        },

        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "user/signup",
          element: <SignUp />,
        },
        {
          path: "user/signin",
          element: <SignIn />,
        },
        {
          path: "admin/signup",
          element: <AdminSignUp />,
        },
        {
          path: "admin/signin",
          element: <AdminSignIn />,
        },

        {
          path: "/dashboard",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "/dashboard/introduction",
              element: <Introduction />,
            },
            {
              path: "/dashboard/installation",
              element: <Installations />,
            },
            {
              path: "/dashboard/identifier",
              element: <Identifier />,
            },
            {
              path: "/dashboard/datatype",
              element: <DataType />,
            },
            {
              path: "/dashboard/typecasting",
              element: <TypeCasting />,
            },
            {
              path: "/dashboard/variables",
              element: <Variables />,
            },
            {
              path: "/dashboard/operators",
              element: <Operators />,
            },
            {
              path: "/dashboard/flowcontrol",
              element: <FlowControl />,
            },
            // oops
            {
              path: "oops/class",
              element: <Class />,
            },
            {
              path: "oops/methods",
              element: <Methods />,
            },
            { path: "oops/features", element: <Featuresofmethod /> },
            { path: "oops/inheritance", element: <Inheritance /> },
            { path: "oops/overloading", element: <MethodOverloading /> },
            { path: "oops/overriding", element: <MethodOverriding /> },
            { path: "oops/modifiers", element: <Modifiers /> },
            { path: "oops/constructors", element: <Constructors /> },
            { path: "oops/interface", element: <Interface /> },
            { path: "oops/blocks", element: <Blocks /> },
            { path: "oops/casting", element: <ObjectTypeCasting /> },
            { path: "oops/factory", element: <FactoryMethod /> },
            { path: "oops/singleton", element: <SingletonClasss /> },
            { path: "oops/hiding", element: <DataHiding /> },
            { path: "oops/abstraction", element: <Abstraction /> },
            { path: "oops/encapsulation", element: <Encapsulation /> },
            { path: "oops/polymorphism", element: <Polymorphism /> },
            //java.lang
            { path: "lang/objectclass", element: <ObjectClass /> },
            { path: "lang/objectmethods", element: <ObjectClassMethod /> },
            { path: "lang/stringclass", element: <StringClass /> },
            { path: "lang/stringmethods", element: <StringMethods /> },
            { path: "lang/stringbuffer", element: <StringBuffer /> },
            {
              path: "lang/stringbuffermethods",
              element: <StringBufferMethods />,
            },
            { path: "lang/wrapperclass", element: <WrapperClass /> },
            {
              path: "lang/wrapperconstructors",
              element: <WrapperConstructors />,
            },
            { path: "lang/wrappermethods", element: <WrapperMethods /> },
            { path: "lang/autoboxing", element: <AutoboxingUnboxing /> },
          ],
        },
        {
          path: "/admindashboard",
          element: (
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "message",
              element: <ContactMessage />,
            },
            {
              path: "usercard",
              element: <UserCards />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
