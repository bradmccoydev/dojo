export const listApplications =
`query listDojoClasses {
  listDojoClasses {
    items {
      class
      created_by
      created_date
      google_slide
      id
      meeting_url
      scheduled_date
    }
    nextToken
  }
}
`;

export const GetApplication =
`query getDojoClass {
  getDojoClass {
    items {
      class
      created_by
      created_date
      google_slide
      id
      meeting_url
      scheduled_date
    }
    nextToken
  }
}
`;