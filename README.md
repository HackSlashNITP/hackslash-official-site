# Hackslash Official Site

- This repositiory holds the official website of the Hackslash


# Folder Structure

/src
│
├── /app
│   │
│   ├── /page.js                                 # Home page (Introduction about the club)
│   │
│   ├── /team                                    # *client action
│   │   └── /[domain].js                         # Dynamic route for different teams (e.g., Team405, GrayInterface)
│   │
│   ├── /blog                                    # *client action
│   │   └── /page.js                             # Blog listing page (news or info about events)
│   │
│   ├── /resources                               # *client action
│   │   └── /page.js                             # Resources/Roadmap page (sharing resources, roadmaps, etc.)
│   │
│   ├── /events                                  # *client action
│   │   ├── /page.js                             # Events listing page
│   │   └── /[event].js                          # Dynamic route for individual event summaries 
│   │
│   ├── /gallery                                 # *server action
│   │   └── /page.js                             # Gallery page (pictures related to events)
│   │
│   ├── /projects                                # *client action
│   │   └── /page.js                             # Projects page (team-wise sorted projects)
│   │
│   ├── /people                                  # *server action
│   │   ├── /developers                          # Developers page (list of developers with roles and social links)
│   │   │   └── /page.js
│   │   │
│   │   └── /designers                           # Designers page (list of designers with roles and social links)
│   │       └── /page.js
│   │
│   └── /components
│       ├── /PeopleCard.js                       # Reusable component for Developers and Designers pages
│       ├── /Card.js                             # Reusable card component for Team/Domain and other pages
│       ├── /ProjectSummary.js                   # Reusable component for individual projects
│       ├── /EventSummary.js                     # Reusable component for individual event summaries
│       ├── /Navbar.js
│       ├── /Footer.js
│       ├── /TypeWriterAnimation.js
│       ├── /GalleryUpdateForm.js                # Form to update images in the Gallery
│       ├── /ProjectsUpdateForm.js               # Form to update Projects
│       ├── /BlogUpdateForm.js                   # Form to update Blogs
│       └── /PeopleComponent.js                  # Component to display people data (developers/designers) based on passed data
│
├── /actions                                     # Place for all server-side actions (if needed in the future) 


# Commiting and Pr rules 
- [Click here](https://gist.github.com/digitaljhelms/3761873)
