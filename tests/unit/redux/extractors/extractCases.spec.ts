import {
  extractCasesFromTimeline, extractStatePopulationFromMetaData, MetaDataRecord,
  TimelineDataRecord
} from "../../../../redux/extractors/extractCases";
import { CaseRecordsByState } from "../../../../redux/store";

describe("extractors", () => {
  describe("extractCasesFromTimeline", () => {
    it("parses timeline input", () => {
      const testData: TimelineDataRecord[] = [
        {
          State: "Berlin",
          "2020-03-14": 123,
          "2020-03-15": 456
        },
        {
          State: "Sachsen",
          "2020-03-14": 321,
          "2020-03-15": 654
        }
      ];

      const actualExtractedData = extractCasesFromTimeline(testData);
      const expectedData: CaseRecordsByState = {
        Sachsen: {
          "2020-03-14": 321,
          "2020-03-15": 654
        },
        Berlin: {
          "2020-03-14": 123,
          "2020-03-15": 456
        }
      };

      expect(actualExtractedData).toStrictEqual(expectedData);
    });
  });

  describe("extractStatePopulationFromMetaData", () => {
    it("extracts population data from state meta data", () => {
      const testData: MetaDataRecord[] = [
        { State: 'Bayen', Population: 13076721 },
        { State: 'Berlin', Population: 3644826 },
      ];

      const actualExtractedData = extractStatePopulationFromMetaData(testData);

      const expectedData = {
        Bayen: 13076721,
        Berlin: 3644826,
      };

      expect(actualExtractedData).toStrictEqual(expectedData);
    });
  });
});
