/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  BuilderBonding,
  BuilderBonding_NewPositionEvent,
  BuilderBonding_PositionBondingEvent,
  BuilderBonding_RewardsClaimedEvent,
  BuilderBonding_PositionDepositEvent,
  BuilderBonding_BuilderRewardsExtendedEvent,
  BuilderBonding_PositionWithdrawEvent,
  BuilderBonding_BaseRewardsSyncedEvent,
  BuilderBonding_ParametersSetEvent,
  BuilderBonding_NewBuilderEvent,
  BuilderBonding_BuilderOwnershipTransferredEvent,
  BuilderBonding_OwnershipTransferredEvent,
  BuilderBonding_BuilderRewardsFundedEvent,
  BuilderBonding_Transfer,
  BuilderBonding_Mint,
  BuilderBonding_Burn,
  Position,
} from "generated";

BuilderBonding.NewPositionEvent.handler(async ({ event, context }) => {
  const entity: BuilderBonding_NewPositionEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  const position: Position = {
    id: event.params.position_id.toString(),
    amount: 0n,
  };

  context.BuilderBonding_NewPositionEvent.set(entity);
  context.Position.set(position);
});

BuilderBonding.PositionBondingEvent.handler(async ({ event, context }) => {
  const entity: BuilderBonding_PositionBondingEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.BuilderBonding_PositionBondingEvent.set(entity);
});

BuilderBonding.RewardsClaimedEvent.handler(async ({ event, context }) => {
  const entity: BuilderBonding_RewardsClaimedEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.BuilderBonding_RewardsClaimedEvent.set(entity);
});

BuilderBonding.PositionDepositEvent.handler(async ({ event, context }) => {
  const entity: BuilderBonding_PositionDepositEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.BuilderBonding_PositionDepositEvent.set(entity);
});

BuilderBonding.BuilderRewardsExtendedEvent.handler(async ({ event, context }) => {
  const entity: BuilderBonding_BuilderRewardsExtendedEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.BuilderBonding_BuilderRewardsExtendedEvent.set(entity);
});

BuilderBonding.PositionWithdrawEvent.handler(async ({ event, context }) => {
  const entity: BuilderBonding_PositionWithdrawEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.BuilderBonding_PositionWithdrawEvent.set(entity);
});

BuilderBonding.BaseRewardsSyncedEvent.handler(async ({ event, context }) => {
  const entity: BuilderBonding_BaseRewardsSyncedEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.BuilderBonding_BaseRewardsSyncedEvent.set(entity);
});

BuilderBonding.ParametersSetEvent.handler(async ({ event, context }) => {
  const entity: BuilderBonding_ParametersSetEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.BuilderBonding_ParametersSetEvent.set(entity);
});

BuilderBonding.NewBuilderEvent.handler(async ({ event, context }) => {
  const entity: BuilderBonding_NewBuilderEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.BuilderBonding_NewBuilderEvent.set(entity);
});

BuilderBonding.BuilderOwnershipTransferredEvent.handler(async ({ event, context }) => {
  const entity: BuilderBonding_BuilderOwnershipTransferredEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.BuilderBonding_BuilderOwnershipTransferredEvent.set(entity);
});

BuilderBonding.OwnershipTransferredEvent.handler(async ({ event, context }) => {
  const entity: BuilderBonding_OwnershipTransferredEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.BuilderBonding_OwnershipTransferredEvent.set(entity);
});

BuilderBonding.BuilderRewardsFundedEvent.handler(async ({ event, context }) => {
  const entity: BuilderBonding_BuilderRewardsFundedEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.BuilderBonding_BuilderRewardsFundedEvent.set(entity);
});

BuilderBonding.Transfer.handler(async ({ event, context }) => {
  const entity: BuilderBonding_Transfer = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.BuilderBonding_Transfer.set(entity);
});

BuilderBonding.Mint.handler(async ({ event, context }) => {
  const entity: BuilderBonding_Mint = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.BuilderBonding_Mint.set(entity);
});

BuilderBonding.Burn.handler(async ({ event, context }) => {
  const entity: BuilderBonding_Burn = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.BuilderBonding_Burn.set(entity);
});
