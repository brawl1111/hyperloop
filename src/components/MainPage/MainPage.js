import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab
} from "carbon-components-react";
import Document16 from "@carbon/icons-react/lib/document/16";
import DocumentInfo from "../DocumentInfo";

const props = {
  tabs: {
    selected: 3,
    triggerHref: "#",
    role: "navigation"
  },
  tab: {
    href: "#",
    role: "presentation",
    tabIndex: 0
  }
};

const MainPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width bx--no-gutter main-page">
      <div className="bx--row main-page__breadcrumbs">
        <div className="bx--col-lg-16">
          <Breadcrumb className="breadcrumbs" noTrailingSlash={true}>
            <BreadcrumbItem>
              <a href="/#">Catalogs</a>
            </BreadcrumbItem>
            <BreadcrumbItem href="#">test</BreadcrumbItem>
            <BreadcrumbItem href="#" isCurrentPage={true}>
              Big Ideas_Detailed Concepts.pdf
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <div className="bx--row main-page__tabs">
        <div className="bx--col-lg-14 bx--no-gutter">
          <Tabs {...props.tabs}>
            <Tab {...props.tab} label="Overview" />
            <Tab {...props.tab} label="Access" />
            <Tab {...props.tab} label="Review" />
            <Tab {...props.tab} label="Profile">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row main-page__document">
                  {/* <div className="bx--col-lg-4">4 columns</div>
                  <div className="bx--col-lg-8">8 columns</div> */}
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Lineage" />
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
