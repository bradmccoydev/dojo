export const listDojoClasses =
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

export const getDojoClass =
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