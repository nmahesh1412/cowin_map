class OxygenSupplyMarker {
  constructor(location, sheet_id) {
    this.location = location;
    this.marker = new google.maps.Marker({
      position: location.position,
      map: null,
      title: location.title,
      icon: "/assets/images/oxygen.png"
    });
    this.position = this.marker.position;

    this.sheet_url = "https://docs.google.com/spreadsheets/d/" + sheet_id

    this.descriptionHtml = `
      <div class="content">
        <h5 class="title is-5 mb-0">
         ${(location.url === undefined) ? location.title : ('<a href="' + location.url +'">' + location.title + '</a>')}
        </h5>
        <p class="is-size-7 mt-1">Updated at: ${location.updatedAt} (<a target="_blank" href="${this.sheet_url}">Source</a>)</p>
        <p class="is-size-7 mt-1">Contact: ${(location.contact === undefined) ? "N/A" : ('<a href="tel:' + location.contact +'">' + location.contact + '</a>')}</p>
        <table class="table has-text-left is-striped is-narrow is-hoverable">
          <tr><th>Oxygen Refilling</th><td>${location.hasRefilling ? "Yes" : "No" }</td></tr>
          <tr><th>Oxygen Cylinders</th><td>${location.hasCylinders ? "Yes" : "No" }</td></tr>
          <tr><th>Oxygen Cans</th><td>${location.hasCans ? "Yes" : "No" }</td></tr>
          <tr><th>Oxygen Concentrator</th><td>${location.hasConcentrator ? "Yes" : "No" }</td></tr>
        </table>
        <p>
        <strong>
          Additional info:
        </strong>
        ${location.additionalInfo}
        </p>
      </div>
    `
  }

  setMap(map) {
    this.marker.setMap(map);
  }
}
