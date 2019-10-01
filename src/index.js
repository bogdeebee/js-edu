/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      const bacicStudyHours = 500;
      const studyHoursWithoutBasics = 800;
      const studyHoursWithBasics = bacicStudyHours + studyHoursWithoutBasics;
      let currentStudyHours;

      if (knowsProgramming === true) {
        currentStudyHours = studyHoursWithoutBasics;
      } else {
        currentStudyHours = studyHoursWithBasics;
      }

      const studyHoursPerWeek = config[focus];
      const timeForEducation = currentStudyHours / studyHoursPerWeek;

      return Math.ceil(timeForEducation);
  };
  