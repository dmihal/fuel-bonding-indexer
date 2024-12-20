import assert from "assert";
import { 
  TestHelpers,
  BuilderBonding_NewPositionEvent
} from "generated";
const { MockDb, BuilderBonding } = TestHelpers;

describe("BuilderBonding contract NewPositionEvent event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for BuilderBonding contract NewPositionEvent event
  const event = BuilderBonding.NewPositionEvent.mock({data: {} /* It mocks event fields with default values, so you only need to provide data */});

  it("BuilderBonding_NewPositionEvent is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await BuilderBonding.NewPositionEvent.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualBuilderBondingNewPositionEvent = mockDbUpdated.entities.BuilderBonding_NewPositionEvent.get(
      `${event.chainId}_${event.block.height}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedBuilderBondingNewPositionEvent: BuilderBonding_NewPositionEvent = {
      id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualBuilderBondingNewPositionEvent, expectedBuilderBondingNewPositionEvent, "Actual BuilderBondingNewPositionEvent should be the same as the expectedBuilderBondingNewPositionEvent");
  });
});
